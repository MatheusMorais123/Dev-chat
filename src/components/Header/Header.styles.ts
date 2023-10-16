/* eslint-disable */
import styled, { css } from 'styled-components';
import Foguete from '@/assets/images/Foquete.png'
export const Wrapper = styled.div`
  ${({}) => css`
    width:100%;
    height:230px;
    background: #22bf66;
  `}
`;
export const Header = styled.div`
  ${({}) => css`
    display:flex;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      font-size: 48px;
      padding: 6.7rem;
      color:#fff;
    }
    .user{
    padding: 3rem;
    color:#fff;
    font-weight:600;
    }
    &::before{
    content: '';
    display: block;
    width: 9rem;
    height: 140px;
    background-image: url(${Foguete.src});
    background-size: cover;
    background-position: right;
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 9;
    }
    .dropdownContent{
      width: 100px;
      height: 40px;
      background: #fff;
      right: 50px;
      position: absolute;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 5px;
      z-index: 999;
      a{
        text-decoration:none;
        color:#343A40;
      }
    }
  `}
`;
export const Right = styled.div`
  ${({}) => css`
    float:right;
  `}
`;
export const LeftSidebar = styled.div`
  ${({}) => css`
    float:left;
    position:fixed;
    z-index: 1;
  `}
`;

export const Container = styled.div`
  ${() => css`
    width: 85%;
    max-width: 1200px;
    margin:0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  `}
`;

export const dropdownContent = styled.div`
  ${() => css`
    width: 100px;
    height: 40px;
    background: #fff;
    right: 50px;
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
  ` }
`;