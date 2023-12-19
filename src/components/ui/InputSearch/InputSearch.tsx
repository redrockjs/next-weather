import s from './InputSearch.module.scss';
import { TextField } from '@radix-ui/themes';
import { SearchIcon } from '@ui/InputSearch/InputSearch.svg';
import clsx from 'clsx';

type Props = {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
};

function InputSearch({ className, placeholder, onChange, onSearch }: Props) {
  return (
    <TextField.Root className={clsx(s.Input, className)}>
      <TextField.Input
        placeholder={placeholder}
        radius="full"
        onChange={(e) => onChange?.(e.target.value)}
      />
      <TextField.Slot onClick={onSearch} className={s.Input__search}>
        <SearchIcon className={s.SearchIcon} />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default InputSearch;
