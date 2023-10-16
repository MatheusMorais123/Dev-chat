/* eslint-disable */
import styled, { css } from 'styled-components';
import { ChatAvatarProps } from './ChatAvatar.types';

type WrapperProps = { backgroundUrl?: string } & Pick<
  ChatAvatarProps,
  'backgroundColor' | 'width' | 'height'
>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundColor, width, height, backgroundUrl }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor || '#1EA659'};
    width: ${width};
    height: ${height};
    border-radius: 50%;
    min-width: 2.125rem;
    min-height: 2.125rem;

    background-image: url(${backgroundUrl});
    background-size: cover;
    background-repeat: no-repeat;
  `}
`;
