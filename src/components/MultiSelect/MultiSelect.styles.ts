/* eslint-disable sonarjs/no-identical-functions */
import styled, { css, CSSProperties } from 'styled-components';
import { ControlProps as ControlPropsReactSelect } from 'react-select';
import { darken } from 'polished';

type CSSProps = {
  '&:hover': CSSProperties;
} & CSSProperties;

type ControlProps = {
  isSelected: boolean;
} & ControlPropsReactSelect;

export const Wrapper = styled.div`
  ${() => css``}
`;

export function getControlCustomStyles(state: ControlProps) {
  const customStyle: CSSProps = {
    boxShadow: 'unset',
    borderWidth: '1px',
    borderColor: '#CED4DA',
    '&:hover': {
      borderColor: darken(0.1, state.menuIsOpen ? '#2684ff' : '#CED4DA'),
    },
  } as CSSProps;

  return customStyle;
}

export function getMenuCustomStyles(state: ControlProps) {
  const customStyle: CSSProps = {
    // Type css here
  } as CSSProps;

  return customStyle;
}

export function getOptionCustomStyles(state: ControlProps) {
  const customStyle: CSSProps = {
    color: '#262931',
    '&:hover': { backgroundColor: '#B2D4FF' },
    backgroundColor: state.isSelected ? '#2684ff' : 'transparent',
  } as CSSProps;

  return customStyle;
}

export function getPlaceholderCustomStyles(state: ControlProps) {
  const customStyle: CSSProps = {
    color: '#727785',
  } as CSSProps;

  return customStyle;
}
