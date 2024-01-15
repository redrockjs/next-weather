import s from './Switch.module.scss';

type Props = {
  classname?: string;
  values?: [string, string];
  selectedValue?: string;
  onChange?: () => void;
};

function Switch({ values, selectedValue, onChange }: Props) {
  return (
    <div className={s.Switch}>
      <div className={s.Switch__item + ' ' + s.Switch__item_active}>mmHg</div>
      <div className={s.Switch__item}>GPa</div>
    </div>
  );
}

export default Switch;
