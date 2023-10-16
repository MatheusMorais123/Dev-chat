/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { S } from '.';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  serverTimestamp,
  setDoc,
  where,
  query
} from 'firebase/firestore'
import MultiSelect from '../MultiSelect/MultiSelect';
import { useUser } from '@/redux/user';
import { loadNumbersByUserIdAsync } from '@/redux/user/actions';

import { getFirebaseBackend, auth } from '../../helpers/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const NewOperators = ({ onClose, selectedOperatorId, setUpdateOperator }) => {
  const [isEditMode, setIsEditMode] = useState(!!selectedOperatorId)
  const [selectedNumbers, setSelectedNumbers] = useState<any>()
  const [user, setUser] = useState<any>();

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      numbers: null,
      password: '',
      isActive: false,
      isAdmin: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string().email('Entre com o e-mail').required('Este campo é obrigatório'),
      password: Yup.string().required('Este campo é obrigatório'),
      isAdmin: Yup.boolean().required('Required')
    }),
    onSubmit: async values => {
      const numbers = selectedNumbers?.map(number => number.value);
      console.log({ numbers });
      try {
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const userId = authUser?.id;
        const currentTime = serverTimestamp();
        const firestore = getFirebaseBackend();
        const collectionName = 'operators';
    
        if (isEditMode && selectedOperatorId) {
          console.log("entrou no if");
          const operatorRef = doc(firestore, collectionName, selectedOperatorId);
          await updateDoc(operatorRef, {
            name: values.name,
            email: values.email,
            numbers,
            isActive: false,
            isAdmin: values.isAdmin,
            user_id: userId,
            updated_at: currentTime,
          });
          console.log('Dados atualizados com sucesso!');
          setUpdateOperator(true);
        } else {
          console.log("entrou");
          const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    
          const operatorData = {
            name: values.name,
            email: values.email,
            numbers,
            password: values.password,
            isActive: false,
            isAdmin: values.isAdmin,
            user_id: userId,
            updated_at: currentTime,
            created_at: currentTime,
            emailVerified: userCredential.user.emailVerified,
          };
          const operatorDocRef = doc(collection(firestore, collectionName), userCredential.user.uid);
          await setDoc(operatorDocRef, operatorData);
          console.log('Dados inseridos com sucesso!');
          setUpdateOperator(true);
        }
        setSelectedNumbers(null);
        formik.resetForm();
        onClose();
      } catch (error) {
        console.error('Erro ao cadastrar operador:', error);
      }
    }    
  })

  const { userState: { numbers }, userDispatch } = useUser()

  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem('authUser'));
    setUser(parsedUser);
  }, []);

  useEffect(() => {
    if (user) {
      userDispatch(loadNumbersByUserIdAsync.request({ userId: user.id }));
    }
  }, [user, userDispatch]);

  return (
    <S.Modal>
      <S.Content>
        <S.Row>
          <S.Title>{isEditMode ? 'Editar operador' : 'Adicionar operador'}</S.Title>

          <button onClick={onClose} className="close">
            X
          </button>
        </S.Row>

        <form onSubmit={formik.handleSubmit}>
          <p>Preencha os campos abaixo para adicionar um novo operador.</p>
          <S.FormGroup>
            <S.TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Nome do operador"
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
              name="email"
              id="email"
              placeholder="Digite o e-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </S.FormGroup>

          {formik.touched.email && formik.errors.email ? (
            <S.Error>{formik.errors.email}</S.Error>
          ) : null}

          {!isEditMode && (
            <S.FormGroup>
              <S.TextInput
                type="password"
                placeholder="Digite a senha"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.email && formik.errors.email ? (
                <div><S.Error>{formik.errors.email}</S.Error></div>
              ) : null}
            </S.FormGroup>
          )}

          <MultiSelect placeholder='Select a number' isMulti options={numbers.map(number => ({ label: number.name, value: number.phone }))} onChange={(value) => setSelectedNumbers(value)} />

          <S.Label>Administrador</S.Label>
          <S.Admin>
            <S.Label>Sim</S.Label>
            <S.TextInput
              className='radio'
              type="radio"
              id="isAdminYes"
              name="isAdmin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="true"
              checked={formik.values.isAdmin}
            />
            <S.Label>Não</S.Label>
            <S.TextInput
              className='radio'
              type="radio"
              id="isAdminNo"
              name="isAdmin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="false"
              checked={!formik.values.isAdmin}
            />
          </S.Admin>

          <S.Footer>
            <button className="cancel" onClick={onClose}>
              Cancelar
            </button>

            <button type='submit'>
              Adicionar operador
            </button>
          </S.Footer>
        </form>
      </S.Content>
    </S.Modal>
  );
};

export default NewOperators;
