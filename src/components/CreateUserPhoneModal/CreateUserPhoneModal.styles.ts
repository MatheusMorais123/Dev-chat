/* eslint-disable */
import styled, { css } from 'styled-components';
import Close from '@/assets/images/close.svg';
import { buttonColors, theme } from '@/styles/theme';

export const Modal = styled.div`
  ${({}) => css`
    width: 568px;
    height: 550px;
    background: #f8f9fa;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
  `}
`;

export const Content = styled.div`
  ${({}) => css`
    display: block;
    form {
      margin-top: 30px;
      padding: 20px;
      button {
        float: right;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        border-radius: 6px;
        cursor: pointer;
        text-decoration: none;
        font-size: 16px;
        /*  padding: 0.625rem 3rem; */
        background-color: #0d6efd;
        padding: 1rem;
        color: #f8f9fa;
        height: 44px;
        margin-top: 20px;
      }
      .cancel {
        background: #f8f9fa;
        color: #0d6efd;
        border: 1px solid #0d6efd;
        height: 40px;
        margin-top: 23px;
        margin-right: 10px;
      }
    }
  `}
`;

export const FormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  `}
`;

export const Admin = styled.div`
  ${() => css`
    display:flex;
    margin-top:20px;
    .radio{
      width:20px;
      height:20px;
      margin: 0px;
    }
  `}
`;

export const Label = styled.div`
  ${() => css`
    padding-left:13px;
  `}
`;

export const TextInput = styled.input`
  ${() => css`
    width: 100%;
    height: 44px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    margin-top: 30px;
    padding: 10px;
    background: #f8f9fa;
   /*  background-color: ${theme.colors.white[500]}; */
    outline:none;
    margin-top:10px;
    > .radio{
      width:15px;
      height:15px;
    }
  `}
`;

export const Footer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: right;
    /* margin-top: 10%;
    margin-bottom-top: 1px solid #000; */

  `}
`;

export const Row = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ced4da;
    padding: 20px;
    .close {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 24px;
      font-weight: 500;
    }
  `}
`

export const Error = styled.div`
  ${({}) => css`
    font-size:13px;
    color:#B30000;
  `}
`;

export const Title = styled.div`
  ${({}) => css`
    font-size:24px;
    color:#343A40;
  `}
`;

