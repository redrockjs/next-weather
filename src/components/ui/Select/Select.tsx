import s from './Select.module.scss';
import { CSSProperties, ReactElement, useEffect, useRef, useState, MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

interface SelectProps<T> {
  items: { value: T; label: string }[];
  value?: T;
  colorless?: boolean;
  placeholder?: string;
  error?: boolean;
  description?: string;
  fullHeight?: boolean;
  onSelect?: (value: T) => void;
  disabled?: boolean;
  style?: CSSProperties;
  emptyLabel?: string;
  className?: string;
  label?: string;
}

type SelectFC = <T>(props: SelectProps<T>) => ReactElement<SelectProps<T>>;

const Select: SelectFC = ({
  items,
  value,
  placeholder,
  error,
  description,
  fullHeight = false,
  colorless = false,
  onSelect,
  disabled = false,
  style,
  emptyLabel,
  className,
  label,
}) => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('click', clickHandler as any, true);
    return () => {
      document.removeEventListener('click', clickHandler as any);
    };
  }, [isOpen]);

  return (
    <div className={clsx(s.Root, className)} style={style} ref={wrapperRef}>
      {label && label}
      <div>
        <div
          className={clsx(
            isOpen ? s.OpenSelect : s.Select,
            error && s.ErrorSelect,
            colorless && s.Colorless,
            disabled && s.Disabled,
          )}
          onClick={() => {
            if (!disabled) {
              setOpen(!isOpen);
            }
          }}
        >
          {items.find((item) => item.value === value)?.label ||
            (placeholder ? <span className={s.Placeholder}>{placeholder}</span> : '')}
        </div>

        <CSSTransition
          in={isOpen}
          timeout={150}
          classNames={{
            enter: s.ListEnter,
            enterActive: s.ListEnterActive,
            exit: s.ListExit,
            exitActive: s.ListExitActive,
          }}
          unmountOnExit
        >
          <div className={fullHeight ? s.ListFull : s.List}>
            {items.length === 0 && <div className={s.Item}>{emptyLabel ?? 'Нет данных'}</div>}
            {items.map((item, index) => (
              <div
                key={`${index}_${item.value}`}
                className={item.value === value ? s.ActiveItem : s.Item}
                onClick={() => {
                  onSelect?.(item.value);
                  setOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
      {description !== undefined && (
        <div className={error ? s.DescriptionError : s.Description}>{description}</div>
      )}
    </div>
  );
};

export default Select;
