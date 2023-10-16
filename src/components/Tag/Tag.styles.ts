import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';
import { TagProps } from '.';

type WrapperProps = Pick<TagProps, 'backgroundColor' | 'color' | 'fontSize'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundColor, color, fontSize }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: 0.938rem;
    padding: 0.25rem 0.625rem;
    background-color: ${backgroundColor || '#0091e6'};

    p {
      color: ${color || '#fff'};
      font-size: ${fontSize || '1rem'};
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`;
