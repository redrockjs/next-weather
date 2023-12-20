import s from './Input.module.scss';
import clsx from 'clsx';
import { TextField } from '@radix-ui/themes';

type InputProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

function Input({ className, placeholder, onChange, value }: InputProps) {
  return (
    <TextField.Root className={clsx(s.Input, className)}>
      <TextField.Input
        placeholder={placeholder}
        radius="full"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </TextField.Root>
  );
}

export default Input;
