/* eslint-disable */
import React, {useState, useEffect} from 'react'
import { S, HeaderAdminProps } from '.';
import BaseText from '../BaseText/BaseText';
import Sidebar from '../Sidebar/Sidebar'
import { FaChevronDown } from 'react-icons/fa';
import { getAuth, signOut } from "firebase/auth";
const Header = ({
  title,
}: HeaderAdminProps) => {
  
  const [authUser, setAuthUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuthUser = JSON.parse(localStorage.getItem('authUser'));
      setAuthUser(storedAuthUser);
    }
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      // Limpar o usuário autenticado localmente
      localStorage.removeItem('authUser');
      window.location.href = '/'; // Substitua isso pela URL da sua página de login
    })
    .catch((error) => {
      // Lidar com erros de logout, se necessário
      console.error("Erro ao fazer logout:", error);
    });
  }

  return (
    <S.Wrapper>
      <S.LeftSidebar>
        <Sidebar/>
      </S.LeftSidebar>
         <S.Header>
            <h1>{title}</h1>
            <div className='user' onClick={toggleDropdown}>
              <a>{authUser && authUser.name}</a>
              <FaChevronDown  className={`user-icon ${isDropdownOpen ? 'open' : ''}`} />
              {isDropdownOpen && (
                <div className='dropdownContent'>
                  <a href='#' onClick={handleLogout}>Sair</a>
                </div>
              )}
            </div>
        </S.Header> 
    </S.Wrapper>
  );
};

export default Header;
