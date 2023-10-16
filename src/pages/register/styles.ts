import styled, { css } from 'styled-components';
import { buttonColors, theme } from '@/styles/theme';
import Foguete from '@/assets/images/Foquete.png'
export const Wrapper = styled.div`
  ${() => css`
  `}
`;

export const LoginForm = styled.form`
  ${() => css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    display: flex;
    flex-direction: column;
    /* align-items: baseline; */
    margin-top: 15%;
    padding: 2rem;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 158px;
    height: auto;
    margin-bottom: 4rem;
    margin-top: -60px;
    margin-left: 7rem;
  `}
`;

export const LoginTitle = styled.h1`
  ${() => css`
    font-size: 20px;
    color: ${theme.colors.black[500]};
    font-weight: bold;
    margin-bottom: 15px;
  `}
`;

export const FormGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `}
`;

export const Label = styled.label`
  ${() => css`
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${theme.colors.black[500]};
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
  `}
`;

export const LoginButton = styled.button`
  ${() => css`
    padding: 8px 16px;
    background: ${buttonColors.success.background};
    color: ${buttonColors.primary.text};
    border: none;
    width: 100%;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  `}
`;

export const ForgotPasswordLink = styled.a`
  ${() => css`
    color: #000;
    text-decoration: none;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
  `}
`;

export const CreateAccountLink = styled.a`
  ${() => css`
    color: #000;
    text-decoration: none;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
  `}
`;

export const LinksContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    color: #000;
    margin-bottom: 20px;
  `}
`;

export const ContainerFluid = styled.div`
  ${() => css`
    width: 100%;
    /*  max-width: 1200px; */
    margin:0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    background:#009440;

    &::before{
      content: '';
      display: block;
      width: 13rem;
      height: 207px;
      background-image: url(${Foguete.src});
      background-size: cover;
      background-position: right;
      position: absolute;
      top: 67%;
      right: 0;
      z-index: 9;
    }
  `}
`;

export const Left = styled.div`
  ${() => css`
    width:500px;
    height:100vh;
    background:#fff;
    float:left;
  `}
`;
export const Error = styled.div`
  ${({}) => css`
    font-size:13px;
    color:#B30000;
  `}
`;
export const Validate = styled.div`
  ${({}) => css`
    font-size:13px;
    color:#B30000;
    text-align:center;
    margin-bottom:10px;
  `}
`;
