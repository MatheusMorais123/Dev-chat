import { theme } from '@/styles/theme';
import { HtmlHTMLAttributes } from 'react';

type HeadingTypes = HtmlHTMLAttributes<HTMLHeadingElement>;

export type HeadingProps = {
  fontSize?: string;
  fontWeight?: keyof typeof theme.font.weight;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  uppercase?: boolean;
  lineHeight?: number;
  letterSpacing?: number;
} & HeadingTypes;
