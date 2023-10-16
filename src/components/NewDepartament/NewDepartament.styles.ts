/* eslint-disable */
import styled, { css } from 'styled-components';
import Close from '@/assets/images/close.svg'
import { buttonColors, theme } from '@/styles/theme';
export const Modal = styled.div`
  ${({}) => css`
    width: 568px;
    height: 321px;
    background: #F8F9FA;
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
    display:block;
    form{
        margin-top:30px;
        padding:20px;
        p{
          font-size:14px;
          color:#343A40;
        }
        button{
          float: right;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          font-size: 16px;
          background-color: #0d6efd;
          padding:1rem;
          color: #f8f9fa;
          height: 44px;
          margin-top:20px;
        }
        .cancel{
          background: #F8F9FA;
          color: #0D6EFD;
          border: 1px solid #0D6EFD;
          height: 40px;
          margin-top: 23px;
          margin-right: 10px;
        }
    }
  `}
`;

export const Footer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: right;
    margin-bottom-top: 1px solid #000;
  `}
`;

export const FormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `}
`;

export const Row = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CED4DA;
    padding:20px;
    .close{
      border:none;
      background:none;
      cursor:pointer;
      font-size:24px;
      font-weight:500;
    }
  `}
`;

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

export const TextInput = styled.input`
  ${() => css`
    padding: 8px;
    border: 1px solid #CED4DA;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    outline: none;
    background-color: ${theme.colors.white[500]};
    outline:none;
    margin-top:10px;
  `}
`;

