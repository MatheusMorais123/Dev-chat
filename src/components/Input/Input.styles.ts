/* eslint-disable */
import styled, { css } from 'styled-components';

type WrapperProps = {
  labelColor?: string;
  labelSize?: string;
};
export const Wrapper = styled.div<WrapperProps>`
  ${({ labelColor, labelSize }) => css`
    display: flex;
    flex-direction: column;

    > label {
      font-size: ${labelSize || '0.75rem'};
      color: ${labelColor || '#262931'};
      margin-bottom: 0.5rem;
    }
  `}
`;

type InputContainerProps = {
  borderColor?: string;
  borderRadius?: string;
  borderSize?: string;
  height?: string;
};

export const InputContainer = styled.div<InputContainerProps>`
  ${({ borderColor, borderRadius, borderSize, height }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${borderRadius || '0.25rem'};
    border: ${borderSize || '1px'} solid ${borderColor || '#ced4da'};
    padding: 0.5rem;
    height: ${height || '3rem'};
    background:#fff !important;
    > input {
      width: 100%;
      color: #262931;
      font-size: 1rem;
      outline: none;
      height: 100%;
      border: none;
      background:none;
      border-bottom:none !important;
      text-align: left !important;
    }
  `}
`;

const iconStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
`;

export const LeftIcon = styled.div`
  ${() => css`
    ${iconStyles}
    margin-right: 0.5rem;
  `}
`;

export const RightIcon = styled.div`
  ${() => css`
    ${iconStyles}
    margin-left: 0.5rem;
  `}
`;
