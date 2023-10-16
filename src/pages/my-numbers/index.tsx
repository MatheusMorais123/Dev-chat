import SearchIcon from '@/assets/images/search.svg';
import CreateUserPhoneModal from '@/components/CreateUserPhoneModal/CreateUserPhoneModal';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { useUser } from '@/redux/user';
import { loadNumbersByUserIdAsync } from '@/redux/user/actions';
import { useEffect, useState } from 'react';
import * as S from './styles';

export default function MyNumbers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState<any>();

  const {
    userState: { numbers },
    userDispatch,
  } = useUser();

  const openEditModal = operatorId => {
    setIsModalVisible(true);
  };

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
    <S.Wrapper>
      <S.ContainerFluid>
        <Header title="Meus Numeros" />

        <S.Container>
          <S.Actions>
            <form>
              <Input
                placeholder="Filtre"
                leftIcon={<SearchIcon color="#262931" />}
                onChange={e => setSearchValue(e.target.value)}
              />
            </form>

            <S.NewDepartament>
              <button type="button" onClick={() => setIsModalVisible(true)}>
                + Novo numero
              </button>
            </S.NewDepartament>
          </S.Actions>

          <S.FieldSet>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Número</th>
                  <th>Status</th>
                  <th>Opções</th>
                </tr>
              </thead>

              <tbody>
                {numbers?.map(number => (
                  <tr key={number.id}>
                    <td>{number.name}</td>

                    <td>{number.phone}</td>

                    <td className={number.isActive ? 'inativo' : 'ativo'}>
                      <a>{number.isActive ? 'Inativo' : 'Ativo'}</a>
                    </td>

                    <td>
                      <button
                        className="edit-button"
                        onClick={() => openEditModal(number.id)}
                      >
                        <i className="edit-icon" />
                      </button>

                      <button
                        onClick={() => console.log(number.id)}
                        className="delete-button"
                      >
                        <i className="delete-icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.FieldSet>
          {isModalVisible ? (
            <CreateUserPhoneModal
              onClose={() => {
                setIsModalVisible(false);
                // setSelectedOperatorId(null);
              }}
            />
          ) : null}
        </S.Container>
      </S.ContainerFluid>
    </S.Wrapper>
  );
}
