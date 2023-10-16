/* eslint-disable */
import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { S, } from '.';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore'
import { getFirebaseBackend } from '../../helpers/firebase'
import {useDep } from '@/redux/departament'
import {createNameDepartamentAsync} from '@/redux/departament/actions'
const NewDepartament = ({
      onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {depDispatch} = useDep()

  const formik = useFormik({
    initialValues: {
      name: '',
      isActive: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O nome é obrigatório'),
    }),

    /* onSubmit: async (values) => {
      console.log('Formulário enviado com valores:', values);

      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const userId = authUser?.id;

      console.log('Despachando ação createNameDepartamentAsync...');
      depDispatch(
        createNameDepartamentAsync.request({
          name: {
            userId: userId,
            name: values.name,
            isActive: false,
          },
        })
      );
      formik.resetForm();
      ///onClose();
    }, */

    onSubmit: async (values) => {
      if (!isSubmitting) {
        setIsSubmitting(true);
        console.log('Formulário enviado com valores:', values);
    
        const authUser = JSON.parse(localStorage.getItem('authUser'));
        const userId = authUser?.id;
    
        console.log('Despachando ação createNameDepartamentAsync...');
        depDispatch(
          createNameDepartamentAsync.request({
            name: {
              userId: userId,
              name: values.name,
              isActive: false,
            },
          })
        );
        onClose();
      }
    },
  });

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }
    setIsSubmitting(false);
  }, [isSubmitting]);

  return (
    <S.Modal>
        <S.Content>
          <S.Row>
            <S.Title>{/* {isEditMode ? 'Editar departamento' : 'Adicionar departamento'} */} Tile</S.Title>
            <button onClick={onClose} className="close">
              X
            </button>
          </S.Row>
            <form onSubmit={formik.handleSubmit}>
                <p>Preencha os campos abaixo para adicionar um novo departamento</p>
                
                <S.FormGroup>
                  <S.TextInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Nome do departamento'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div><S.Error>{formik.errors.name}</S.Error></div>
                  ) : null}
                </S.FormGroup>

                <S.Footer>
                    <button className="cancel" onClick={onClose}>Cancelar</button>
                    <button type='submit' disabled={isSubmitting}>Adicionar departamento</button>
                </S.Footer>
            </form>
        </S.Content>
    </S.Modal>
  );
};

export default NewDepartament;




