
import React, { useState } from 'react'
import logo from '@/assets/images/Logo.png';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as S from '../pages/login/styles';
import { db, auth } from '../helpers/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Router from 'next/router';
export default function Login() {
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Por favor digite o e-mail'),
      password: Yup.string().required('Por favor digite a senha')
    }),
    onSubmit: async values => {
      const { email, password } = values;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado com sucesso!', userCredential.user);

        const userRef = collection(db, 'users');
        const userQuerySnapshot = await getDocs(query(userRef, where('email', '==', email)));

        if (!userQuerySnapshot.empty) {
          const user = userQuerySnapshot.docs[0].data();
          if (user.isActive) {
            console.log('Usuário inativo. Acesso não permitido.');
            setError('Usuário inativo. Acesso não permitido.');
            return;
          }
          localStorage.setItem('authUser', JSON.stringify({ id: userQuerySnapshot.docs[0].id, ...user }));
          Router.push('/dashboard')
          setSuccess(true);
          return;
        }

        const operatorsRef = collection(db, 'operators');
        const operatorsQuerySnapshot = await getDocs(query(operatorsRef, where('email', '==', email)));

        if (!operatorsQuerySnapshot.empty) {

          const operatorCredential = await signInWithEmailAndPassword(auth, email, password);

          console.log(operatorCredential)

          console.log('Operador logado com sucesso!', operatorCredential.user);

          const operator = operatorsQuerySnapshot.docs[0].data();
          localStorage.setItem('authUser', JSON.stringify({ id: operatorsQuerySnapshot.docs[0].id, ...operator }));
          Router.push('/dashboard')
          return;
        }
        console.log('Email ou senha inválidos.');
        setError('Email ou senha inválidos.');
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          console.error('Email ou senha inválidos.');
          setError('Email ou senha inválidos.');
        } else if (error.code === 'auth/user-not-found') {
          console.error('Usuário não encontrado.');
          setError('E-mail não encontrado.');
        } else if (error.code === 'auth/email-already-in-use') {
          console.error('Este e-mail já está em uso por outro usuário.');
          setError('Este e-mail já está em uso por outro usuário.');
        } else if (error.code === 'auth/weak-password') {
          console.error('A senha deve ter pelo menos 6 caracteres.');
          setError('A senha deve ter pelo menos 6 caracteres.');
        } else {
          console.error('Ocorreu um erro ao fazer login:', error);
          setError('Ocorreu um erro ao fazer login.');
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

            <S.CreateAccountLink href="/register">Criar conta</S.CreateAccountLink>
          </S.LinksContainer>
        </S.LoginForm>
      </S.Left>
    </S.ContainerFluid>
  );
}
