/* eslint-disable */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
    /* padding: 10rem; */
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
  width: 85%;
  max-width: 1200px;
  margin:0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  `}
`;
export const Row = styled.div`
  ${() => css`
    display:flex;
    justify-content: space-between;
  `}
`;

export const Actions = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    margin-top:20px;
  `}
`;

export const Form = styled.div`
  ${() => css`
    input{
      width:264px;
      height:52px;
      border-radius:8px;
      border: 1px solid #ADB5BD;
      outline:none;
      color:#6C757D;
      font-size:16px;
      padding:25px;
    ::placeholder {
        padding:1px;
      } 
    }
    button{
      position:absolute;
      left: 110px;
      width: 2.2rem;
      /* right: 0px; */
      z-index: 19;
      /* background-color: transparent; */
      cursor: pointer;
      /* height: 100% !important; */
      margin-top: 15px;
    }
  `}
`;

export const Filter = styled.div`
  ${() => css`
    width: 100%;
    height: 89px;
    background: #d9d9d9;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    button {
      float: right;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      font-size: 18px;
      padding: 0.625rem 3rem;
      background-color: #0d6efd;
      color: #f8f9fa;
      height: 50px;
    }
    input {
      width: 190px;
      height: 50px;
      border: none;
      outline: none;
      font-size: 16px;
      color: #878787;
      padding: 10px;
      text-align:center;
      border-bottom:1px solid #727785;
    }
    
    a {
      cursor: pointer;
      color: #878787;
      display: flex;
      justify-content: center;
      text-decoration:none;
      font-size:16px;
      margin-top:10px;
      
    }
    position: relative;
    > div {
      position: absolute;
      top: 77%;
      right: 24px;
      width: 190px;
      height: 300px;
      background-color: white;
      box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
      display: none;
      border-radius:4px; 
      > label{
        font-size:13px;
        display:flex;
        justify-content: center;
        margin-top: 5px;
        color:#878787;
      }     
      .show{
        background: #fff;
        position: absolute;
        left: 30;
        right: 12rem;
        height: 178px;
        border-radius: 4px;
        width: 220px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
        top: 50%;
        box-sizing: border-box;
        padding: 10px;
        label{
          color:#878787;
          padding:10px; 
        }
        input{
          border-radius: 4px;
          border: 1px solid #E6E9EC;
        }
      }
    }
    }
    &:hover > div {
      display: block;
    }
  `}
`;

export const Left = styled.div`
  ${() => css`
    float:left;
    width:79%;
    height:356px;
    background:#fff;
    box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
    margin-top:30px;
    box-sizing: border-box;
    padding: 2rem;
    border-radius:6px;
    p{
      font-weight:bold;
      font-size:16px;
      color:#878787;
    }
  `}
`;

export const Right = styled.div`
  ${() => css`
    float:left;
    width:20%;
    height:356px;
    background:#fff;
    box-shadow: 0 2px 4px rgba(15, 34, 58, 0.12);
    margin-top:30px;
    box-sizing: border-box;
    padding: 2rem;
    border-radius:6px;
    p{
      font-weight:bold;
      font-size:16px;
      color:#878787;
    }
  `}
`;
