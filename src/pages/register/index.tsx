/* eslint-disable */
import React, {useState} from 'react'
import * as S from './styles';
import logo from '@/assets/images/Logo.png';
import { useFormik} from 'formik'
import * as Yup from 'yup'
import { db, auth } from '../../helpers/firebase'
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
  setDoc,
  doc
} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function Register() {
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Por favor digite o e-mail'),
      password: Yup.string().required('Por favor digite a senha')
    }),
    onSubmit: async values => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = {
          name: values.name,
          email: values.email,
          isActive: false,
          isAdmin: true,
          created_at: serverTimestamp(),
          emailVerified: userCredential.user.emailVerified,
        };
    
        const usersRef = collection(db, 'users');
        const usersQuerySnapshot = await getDocs(query(usersRef, where('email', '==', values.email.toLowerCase())));
    
        if (usersQuerySnapshot.empty) {
          const userDocRef = doc(usersRef, userCredential.user.uid);
          await setDoc(userDocRef, user);
    
          console.log('Usuário registrado com sucesso!', userCredential.user);
          setSuccess(true);
        } else {
          setError('Já existe um usuário com o mesmo e-mail');
          console.log('Já existe um usuário com o mesmo e-mail');
        }
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setError('Este e-mail já está em uso por outro usuário.');
        } else if (error.code === 'auth/weak-password') {
          setError('A senha deve ter pelo menos 6 caracteres.');
        } else {
          console.log(error);
          setError('Ocorreu um erro ao registrar o usuário.');
        }
      }
    }       
  });
  return (
    <S.ContainerFluid>
        <S.Left>
          <S.LoginForm onSubmit={formik.handleSubmit}>
            <S.Image src={logo.src} />

            <S.LoginTitle>Faça login para continuar</S.LoginTitle>

            <S.FormGroup>
              <S.Label htmlFor="email">Nome *</S.Label>

              <S.TextInput
               type="text" 
               id="name"
               name="name"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div><S.Error>{formik.errors.name}</S.Error></div>
              ) : null}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="email">E-mail *</S.Label>

              <S.TextInput
               type="text" 
               id="email"
               name="email"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div><S.Error>{formik.errors.email}</S.Error></div>
              ) : null}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="password">Senha *</S.Label>
              
              <S.TextInput 
                type="password" 
                id="password" 
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div><S.Error>{formik.errors.password}</S.Error></div>
              ) : null}
            </S.FormGroup>

            {success && (
              <S.Validate>
                <p>Sucesso</p>
              </S.Validate>
            )}
            {error && <S.Validate>
              <p>{error}</p>
            </S.Validate>}

            <S.LoginButton type="submit">Entrar</S.LoginButton>

            <S.LinksContainer>
              <S.ForgotPasswordLink href="#">Esqueci a senha</S.ForgotPasswordLink>

              <S.CreateAccountLink href="/">Login</S.CreateAccountLink>
            </S.LinksContainer>
          </S.LoginForm>
        </S.Left>
    </S.ContainerFluid>
  );
}
