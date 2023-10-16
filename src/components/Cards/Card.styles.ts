/* eslint-disable */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({}) => css`
    width:100%;
    height:230px;
    background: #22bf66;
  `}
`;

export const Box = styled.div`
  ${({}) => css`
     width:235px;
    height:102px;
    background:#fff;
    margin-top:20px;
    box-shadow: 0 2px 4px rgba(15,34,58,0.12);
    border-radius:6px;
    color:#000; 
    box-sizing: border-box;
    padding: 20px;
    p{
      color:#878787;
      font-weight:bold;
      font-size:12px;
    }
  `}
`;

export const Row = styled.div`
  ${({}) => css`
     display:flex;
     justify-content: space-between;
  `}
`;

export const ContainerFluid= styled.div`
  ${() => css`
  width: 100%;
 /*  max-width: 1200px; */
  margin:0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  `}
`;
export const Container = styled.div`
  ${() => css`
  width: 100%;
  max-width: 1200px;
  margin:0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  `}
`;

export const Line = styled.div`
  ${() => css`
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
  `}
`;

export const IconCards = styled.div`
  ${() => css`
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
  `}
`;