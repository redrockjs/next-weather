import s from './InputSearch.module.scss';
import { TextField } from '@radix-ui/themes';
import { SearchIcon } from '@ui/InputSearch/InputSearch.svg';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

function InputSearch({ placeholder, onChange }: Props) {
  return (
    <TextField.Root className={s.Input}>
      <TextField.Input
        placeholder={placeholder}
        radius="full"
        onChange={(e) => onChange?.(e.target.value)}
      />
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default InputSearch;
