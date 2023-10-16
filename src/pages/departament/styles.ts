/* eslint-disable */
import styled, { css } from 'styled-components';
import deleteIcon from '@/assets/images/delete.png'
import EditIcon from '@/assets/images/edit.png'
export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
  `}
`;
export const ContainerFluid= styled.div`
  ${() => css`
  width: 100%;
  margin:0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  `}
`;
export const Container = styled.div`
  ${() => css`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 6rem;
    padding-bottom: 3rem;
    padding-right: 1rem;
  `}
`;
export const Row = styled.div`
  ${() => css`
    display:flex;
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
      z-index: 19;
      cursor: pointer;
      margin-top: 15px;
    }
  `}
`;

export const NewDepartament = styled.div`
  ${() => css`
    button{
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border: 0px;
        border-radius:4px;
        cursor: pointer;
        text-decoration: none;
        font-size: 16px;
        padding: 0.625rem 1.5625rem;
        background-color: #0D6EFD;
        color:#F8F9FA;
        height: 44px;
        font-weight: 500;
    }
  `}
`;

export const FieldSet = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
    background: #fff;
    border: 1px solid #ced4da;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 20px;
    margin-top: 20px;
    border-radius: 10px;
    table {
      border-collapse: collapse;
      width: 100%;
    }
    td {
      text-align: left;
      padding: 8px;
      height: 64px;
      color: #262931;
      a {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border: 0px;
        border-radius: 2.5rem;
        cursor: pointer;
        text-decoration: none;
        font-size: 0.875rem;
        padding: 0.625rem 1.5625rem;
        background-color: #B3E5C9;
        font-weight: 700;
        width: 100px;
      }      
      &.inativo {
        color: #B30000 !important;
        a{
          background-color:#F0CCCC;
        }
      }
      &.ativo {
        color: #1EA659;
      }
      .delete-icon {
        background-image: url(${deleteIcon.src});
      }
      .edit-icon {
        background-image: url(${EditIcon.src});
      }
      .edit-icon,
      .delete-icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
      }
      button {
        border: none;
        background: none;
      }
    }
    th {
      text-align: left;
      padding: 8px;
      height: 64px;
      color: #fff;
      background: #1EA659;
    }
    tr:nth-child(even) {
      background-color: #EAEBF0;
      border-radius: 50%;
    }
  `}
`;
