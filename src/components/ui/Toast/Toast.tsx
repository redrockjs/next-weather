import s from './Toast.module.scss';
import * as RadixToast from '@radix-ui/react-toast';

type ToastProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  title: string;
  description: string;
};

export function Toast({ open, onOpenChange, title, description }: ToastProps) {
  return (
    <RadixToast.Root className={s.ToastRoot} open={open} onOpenChange={onOpenChange}>
      <RadixToast.Title className={s.ToastTitle}>{title}</RadixToast.Title>
      <RadixToast.Description className={s.ToastDescription}>{description}</RadixToast.Description>
    </RadixToast.Root>
  );
}
