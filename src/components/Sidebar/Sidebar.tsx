/* eslint-disable */
import React, {useState} from 'react'
import { S, } from '.';
import BaseText from '../BaseText/BaseText';
import LogoOpen from '../../assets/images/LogoOpen.svg'
import Logo from '../../assets/images/logo.svg'
import Home from '../../assets/images/home.svg'
import Campanha from '../../assets/images/campanha.svg'
import FAQ from '../../assets/images/fag.svg'
import Funil from '../../assets/images/funil.svg'
import Call from '../../assets/images/call.svg'
import Click from '../../assets/images/click.svg'
import Close from '../../assets/images/close.svg'
const Sidebar = ({

}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
      <S.Left sidebarOpen={sidebarOpen}>
          <S.Toogle>
            <button onClick={handleSidebarToggle}>
                {sidebarOpen ? (
                  <Close width="100" /> 
                ) : (
                  <Click width="100" /> 
                )}
            </button>
            <a className='logo'>
              {sidebarOpen ? (
                <LogoOpen width="158" />
                
              ) : (
                <Logo width="100" />
              )}
            </a>
          </S.Toogle>
        <ul>
          {/* <li className='logo'>
            {sidebarOpen ? (
              <LogoOpen width="158" />
              
            ) : (
              <Logo width="100" />
            )}
          </li> */}
          <li>
            {sidebarOpen ? (
              <a>
                <Home width="100" />
                <span>Home</span>
              </a>
            ) : (
              <a>
                <Home width="100" />
              </a>
            )}
          </li>
          <li>
            {sidebarOpen ? (
              <a href="/departament">
                <Campanha width="100" />
                <span>Departamentos</span>
              </a>
            ) : (
              <a>
                <Campanha width="100" />
              </a>
            )}
          </li>
          <li>
            {sidebarOpen ? (
              <a href="/operators">
                <FAQ width="100" />
                <span>Operadores</span>
              </a>
            ) : (
              <a>
                <FAQ width="100" />
              </a>
            )}
          </li>
          <li>
            {sidebarOpen ? (
              <a>
                <Funil width="100" />
                <span>Funil</span>
              </a>
            ) : (
              <a>
                <Funil width="100" />
              </a>
            )}
          </li>
          <li>
            {sidebarOpen ? (
              <a>
                <Call width="100" />
                <span>Ligações</span>
              </a>
            ) : (
              <a>
                <Call width="100" />
              </a>
            )}
          </li>
        </ul>
    </S.Left>
  );
};

export default Sidebar;

