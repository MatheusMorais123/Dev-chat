import React, { useState } from 'react';
import logo from '@/assets/images/Logo.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as S from '../login/styles';
import { db, auth } from '../../helpers/firebase';

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Por favor digite o e-mail'),
      password: Yup.string().required('Por favor digite a senha'),
    }),
    onSubmit: async values => {
      const { email, password } = values;
      try {
        // Fazer o login com email e senha usando a autenticação do Firebase
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        console.log(userCredential);
        // Verificar se o usuário está ativo (is_active)
        const userRef = collection(db, 'users');
        const userQuerySnapshot = await getDocs(
          query(userRef, where('email', '==', email)),
        );

        if (!userQuerySnapshot.empty) {
          const user = userQuerySnapshot.docs[0].data();
          if (user.is_active) {
            console.log('Usuário inativo. Acesso não permitido.');
            setError(true);
            return;
          }
          // Se o usuário estiver ativo e o login for bem-sucedido, salvar os dados no localStorage
          localStorage.setItem(
            'authUser',
            JSON.stringify({ id: userQuerySnapshot.docs[0].id, ...user }),
          );
          setSuccess(true);
          return;
        }

        // Verificar se é um operador
        const operatorsRef = collection(db, 'operators');
        const operatorsQuerySnapshot = await getDocs(
          query(operatorsRef, where('email', '==', email)),
        );

        if (!operatorsQuerySnapshot.empty) {
          const operator = operatorsQuerySnapshot.docs[0].data();
          if (operator.password === password) {
            console.log('Operator logged in successfully!', operator);
            localStorage.setItem(
              'authOperator',
              JSON.stringify({
                id: operatorsQuerySnapshot.docs[0].id,
                ...operator,
              }),
            );
            return;
          }
        }

        
        console.log('Email ou senha inválidos.');
        setError(true);
        setEmailError(true);
        setPasswordError(true);
      } catch (error) {
        console.log('Ocorreu um erro ao fazer login.', error);
        setError(true);
      }
    },
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
              <div>
                <S.Error>{formik.errors.email}</S.Error>
              </div>
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
              <div>
                <S.Error>{formik.errors.password}</S.Error>
              </div>
            ) : null}
          </S.FormGroup>

          {success && (
            <S.Validate>
              <p>Sucesso</p>
            </S.Validate>
          )}
          {error && (
            <S.Validate>
              <p>Email ou senha inválidos</p>
            </S.Validate>
          )}

          <S.LoginButton type="submit">Entrar</S.LoginButton>

          <S.LinksContainer>
            <S.ForgotPasswordLink href="#">
              Esqueci a senha
            </S.ForgotPasswordLink>

            <S.CreateAccountLink href="/register">
              Criar conta
            </S.CreateAccountLink>
          </S.LinksContainer>
        </S.LoginForm>
      </S.Left>
    </S.ContainerFluid>
  );
}
