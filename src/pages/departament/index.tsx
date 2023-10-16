/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Input from '@/components/Input/Input';
import SearchIcon from '@/assets/images/search.svg';
import Header from '@/components/Header/Header'
import NewDepartament from '@/components/NewDepartament/NewDepartament';
import * as S from './styles';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
  serverTimestamp
} from 'firebase/firestore'
import { getFirebaseBackend } from '../../helpers/firebase'
import PrivateRoute from '../../helpers/PrivateRoute';
import {useDep} from '@/redux/departament'
import { loadNameDepartamentByUserIdAsync } from '@/redux/departament/actions'
export default function Departament() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [departament, setDepartament] = useState([])
  const [selectedDepartamentId, setselectedDepartamentId] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [toUpdate, setToUpdate] = useState(false)
  const [user, setUser] = useState<any>();

  /* const {
    depState:{names},
    depDispatch,
  } = useDep();
  
  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem('authUser'));
    setUser(parsedUser);
  },[])

  useEffect(() => {
    if (user) {
      depDispatch(loadNameDepartamentByUserIdAsync.request({ userId: user.id }));
    }
  }, [user, depDispatch]); */

  return (
    <S.Wrapper>
      <PrivateRoute>
        <S.ContainerFluid>
          <Header title="Departamentos" />
          <S.Container>
            <S.Actions>
              <form>
                <Input
                  placeholder="Filtre por operador"
                  leftIcon={<SearchIcon color="#262931" />}
                  onChange={e => setSearchValue(e.target.value)}
                />
              </form>
              <S.NewDepartament>
                <button onClick={() => setIsModalVisible(true)}>
                  +  Novo departamento
                </button>
              </S.NewDepartament>
            </S.Actions>
            <S.FieldSet>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {names?.map(name => (
                  <tr key={name.id}>
                    <td>{name.name}</td>
                    <td className={name.isActive ? 'inativo' : 'ativo'}>
                      <a>{name.isActive ? 'Inativo' : 'Ativo'}</a>
                    </td>
                    <td>
                      <button
                        className="edit-button"
                        //onClick={() => openEditModal(departament.id)}
                      >
                        <i className="edit-icon"></i>
                      </button>
                      <button
                        //onClick={() => inativarDepartament(departament.id)}
                        className="delete-button"
                      >
                        <i className="delete-icon"></i>
                      </button>
                    </td>
                  </tr>
                  ))} */}

                </tbody>
              </table>
            </S.FieldSet>
            {isModalVisible ? (
              <NewDepartament
                onClose={() => {
                  setIsModalVisible(false);
                }}
              />
            ) : null}
          </S.Container>
        </S.ContainerFluid>
      </PrivateRoute>
    </S.Wrapper>
  );
}
