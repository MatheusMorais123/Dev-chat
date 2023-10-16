/* eslint-disable */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({}) => css`
    width:100%;
    height:230px;
    background: #22bf66;
  `}
`;

export const Image = styled.div`
  ${({}) => css`
    width:100px;
    height:200px;
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
        top: 40%;
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