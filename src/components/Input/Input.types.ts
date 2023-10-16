import { HTMLAttributes, ReactNode } from 'react';

type InputTypes = HTMLAttributes<HTMLInputElement>;

export type InputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  labelColor?: string;
  labelSize?: string;
  borderRadius?: string;
  borderSize?: string;
  borderColor?: string;
} & InputTypes;
