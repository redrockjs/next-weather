import s from './Input.module.scss';
import clsx from 'clsx';
import { TextField } from '@radix-ui/themes';

type InputProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autoComplete?: string;
};

function Input({ className, placeholder, onChange, value, type, autoComplete }: InputProps) {
  return (
    <TextField.Root className={clsx(s.Input, className)}>
      <TextField.Input
        variant="surface"
        placeholder={placeholder}
        radius="full"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        autoComplete={autoComplete}
      />
    </TextField.Root>
  );
}

export default Input;
