import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { theme } from '@/styles/theme';
import { BaseTextProps } from '.';

type WrapperProps = Pick<
  BaseTextProps,
  | 'fontSize'
  | 'fontWeight'
  | 'color'
  | 'alternativeColor'
  | 'uppercase'
  | 'textAlign'
  | 'breakWord'
  | 'lineHeight'
  | 'letterSpacing'
  | 'textDecoration'
>;

const wrapperModifiers = {
  uppercase: () => css`
    text-transform: uppercase;
  `,
  alternativeColor: (color: string) => css`
    color: ${color};
  `,
  textDecoration: (color: string) => css`
    text-decoration: underline;
    text-underline-position: under;

    &:hover {
      color: ${darken(0.1, color)};
    }
  `,
};

export const Wrapper = styled.p<WrapperProps>`
  ${({
    fontSize,
    fontWeight,
    color,
    textAlign,
    breakWord,
    lineHeight,
    letterSpacing,
    uppercase,
    alternativeColor,
    textDecoration,
  }) => css`
    display: inline-flex;
    align-items: center;
    font-size: ${fontSize};
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${color};
    text-align: ${textAlign};
    text-decoration: none;
    word-break: ${breakWord ? 'break-word' : 'normal'};
    line-height: ${!lineHeight
      ? 'normal'
      : isNaN(+lineHeight)
      ? lineHeight
      : `${lineHeight}rem`};
    letter-spacing: ${letterSpacing ? `${letterSpacing}rem` : 'normal'};
    white-space: pre-wrap;

    &:visited {
      color: ${color};
    }

    ${uppercase && wrapperModifiers.uppercase()}
    ${alternativeColor && wrapperModifiers.alternativeColor(alternativeColor)}
    ${textDecoration && wrapperModifiers.textDecoration(color)}
  `}
`;
