/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Input from '@/components/Input/Input';
import SearchIcon from '@/assets/images/search.svg';
import MenuBarsIcon from '@/assets/images/menuBars.svg';
import Header from '@/components/Header/Header';
import NewOperators from '@/components/NewOperators/NewOperator';
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
export default function Departament(valu) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [operator, setOperator] = useState([])
  const [selectedOperatorId, setSelectedOperatorId] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [UpdateOperator, setUpdateOperator] = useState(false)
  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const userId = authUser ? authUser.id : null;

    listOperators(userId).catch(error => {
      console.log('Erro ao obter', error);
      console.log(selectedOperatorId);
    });
  }, [UpdateOperator]);

  const listOperators = async (userId) => {
    try {
      const firestore = getFirebaseBackend();
      const collectionName = 'operators';

      const querySnapshot = await getDocs(
        query(collection(firestore, collectionName), where('user_id', '==', userId))
      );
        
      const operatorData = [];
      querySnapshot.forEach(doc => {
        operatorData.push({ id: doc.id, ...doc.data() });
      });
      console.log(operatorData)
      setOperator(operatorData);
    } catch (error) {
      console.error('Erro ao listar operadores:', error);
    }
  }
  
  const inativarOperator = operatorId => {
    const firestore = getFirebaseBackend()
    const collectionName = 'operators'
    const operatorRef = doc(firestore, collectionName, operatorId)
    updateDoc(operatorRef, { isActive: true })
      .then(() => {
        console.log('Operador inativado com sucesso!')
        setUpdateOperator(true)
      })
      .catch(error => {
        console.error('Erro ao inativar operador:', error)
       /*  setUpdateOperator(true) */
      })
  }
  const openEditModal = operatorId => {
    setSelectedOperatorId(operatorId);
    setIsModalVisible(true);
  };

  const filterOperators = () => {
    const filtered = operator.filter(op =>
      op.email.toLowerCase().includes(searchValue.toLowerCase())
    )
    return filtered
  }
  return (
    <S.Wrapper>
      <S.ContainerFluid>
        <Header title="Operadores" />
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
                + Novo operador
              </button>
            </S.NewDepartament>
          </S.Actions>
          <S.FieldSet>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Status</th>
                  <th>ADMIN</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
              {filterOperators().map((operator) => (
                  <tr key={operator.id}>
                    <td>{operator.name}</td>
                    <td className={operator.isActive ? 'inativo' : 'ativo'}>
                      <a>{operator.isActive ? 'Inativo' : 'Ativo'}</a>
                    </td>
                    <td className={operator.isAdmin ? 'sim' : 'nao'}>
                      <a>{operator.isAdmin ? 'Sim' : 'Não'}</a>
                    </td>
                    <td>
                    <button
                        className="edit-button"
                        onClick={() => openEditModal(operator.id)}
                      >
                        <i className="edit-icon"></i>
                      </button>
                      <button
                        onClick={() => inativarOperator(operator.id)}
                        className="delete-button"
                      >
                        <i className="delete-icon"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.FieldSet>
          {isModalVisible ? (
            <NewOperators
              onClose={() => {
                setIsModalVisible(false);
                setSelectedOperatorId(null);
              }}
              selectedOperatorId={selectedOperatorId}
              setUpdateOperator={setUpdateOperator}
            />
          ) : null}
        </S.Container>
      </S.ContainerFluid>
    </S.Wrapper>
  );
}
