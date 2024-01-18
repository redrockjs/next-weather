import s from './Switch.module.scss';
import clsx from 'clsx';

type SwitchProps = {
  classname?: string;
  values: [string, string];
  selectedValue: string;
  onChange: (value: string) => void;
};

function Switch({ values, selectedValue, onChange }: SwitchProps) {
  const toggleSwitch = () => onChange(selectedValue !== values[0] ? values[0] : values[1]);

  return (
    <div className={s.Switch} onClick={toggleSwitch}>
      <div
        className={clsx(s.Switch__selection, selectedValue !== values[0] && s.Switch__selection_on)}
      ></div>
      <div className={s.Switch__item}>{values[0]}</div>
      <div className={s.Switch__item}>{values[1]}</div>
    </div>
  );
}

export default Switch;
