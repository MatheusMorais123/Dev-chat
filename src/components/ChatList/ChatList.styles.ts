import styled, { css } from 'styled-components';

type WrapperProps = {
  maxHeight: string;
  isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ maxHeight, isOpen }) => css`
    border-top: none;
    opacity: ${isOpen ? '1' : '0'};
    max-height: ${isOpen ? maxHeight : '0'};
    overflow: hidden;
    transition: all 0.3s;
    width: fit-content;

    ${List} {
      max-height: ${maxHeight};
    }
  `}
`;

export const List = styled.div`
  ${() => css`
    overflow-y: scroll;
    overflow-x: hidden;
    width: fit-content;
    padding-right: 11px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      width: 5px;
      background: #eaebf0;
      border-radius: 24px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ced4da;
      border-radius: 24px;
    }
  `}
`;
