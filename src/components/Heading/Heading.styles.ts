import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';
import { HeadingProps } from '.';

type WrapperProps = Pick<
  HeadingProps,
  | 'fontSize'
  | 'fontWeight'
  | 'color'
  | 'uppercase'
  | 'lineHeight'
  | 'letterSpacing'
>;

const wrapperModifiers = {
  uppercase: () => css`
    text-transform: uppercase;
  `,
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({
    fontSize,
    fontWeight,
    color,
    uppercase,
    lineHeight,
    letterSpacing,
  }) => css`
    font-size: ${fontSize};
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${color};
    line-height: ${lineHeight ? `${lineHeight}rem` : 'normal'};
    letter-spacing: ${letterSpacing ? `${letterSpacing}rem` : 'normal'};
    white-space: pre-wrap;

    ${uppercase && wrapperModifiers.uppercase()}
  `}
`;
