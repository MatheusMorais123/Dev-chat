import { theme } from '@/styles/theme';
import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

type BaseTextTypes =
  | HTMLAttributes<HTMLParagraphElement>
  | HTMLAttributes<HTMLSpanElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

type TextAlignType =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent';

export type BaseTextProps = {
  fontSize?: string;
  fontWeight?: keyof typeof theme.font.weight;
  color?: string;
  alternativeColor?: string;
  uppercase?: boolean;
  textAlign?: TextAlignType;
  breakWord?: boolean;
  textDecoration?: boolean;
  lineHeight?: number | string;
  letterSpacing?: number;
  as?: 'p' | 'span' | 'a';
} & BaseTextTypes;
