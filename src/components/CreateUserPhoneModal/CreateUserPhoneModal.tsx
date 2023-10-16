/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useFormik} from 'formik'
import * as Yup from 'yup'
import * as S from './CreateUserPhoneModal.styles';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore'
import { getFirebaseBackend } from '../../helpers/firebase'
import { useUser } from '@/redux/user';
import { createNumberAsync } from '@/redux/user/actions';


const CreateUserPhoneModal = ({ onClose }) => {
  const {userDispatch} = useUser()

  const formik = useFormik({
    initialValues:{
      name: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O nome é obrigatório'),
      phone: Yup.string().required('Este campo é obrigatório'),
    }),
    onSubmit: async values => {
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const userId = authUser?.id;

      userDispatch(createNumberAsync.request({ number: {  userId: userId,
        name: values.name,
        phone: values.phone}}))

      formik.resetForm()
      onClose()
    }
  })
  return (
    <S.Modal>
      <S.Content>
        <S.Row>
          <S.Title>Adicionar numero</S.Title>

          <button onClick={onClose} className="close">
            X
          </button>
        </S.Row>

        <form onSubmit={formik.handleSubmit}>
          <p>Preencha os campos abaixo para adicionar um novo numero.</p>

          <S.FormGroup>
            <S.TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </S.FormGroup>

          {formik.touched.name && formik.errors.name ? (
            <S.Error>{formik.errors.name}</S.Error>
          ) : null}

          <S.FormGroup>
            <S.TextInput
              type="text"
              name="phone"
              id="phone"
              placeholder="Digite um numero"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </S.FormGroup>

          {formik.touched.phone && formik.errors.phone ? (
            <S.Error>{formik.errors.phone}</S.Error>
          ) : null}

          <S.Footer>
            <button className="cancel" onClick={onClose}>
              Cancelar
            </button>

            <button type='submit'>Adicionar numero</button>
          </S.Footer>
        </form>
      </S.Content>
    </S.Modal>
  );
};

export default CreateUserPhoneModal;
