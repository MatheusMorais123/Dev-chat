/* eslint-disable */
import React, {useState} from 'react'
import { S, } from '.';
import BaseText from '../BaseText/BaseText';
import Logo from '../../assets/images/logo.svg'
import LogoOpen from '../../assets/images/LogoOpen.svg'
import Home from '../../assets/images/home.svg'
import Campanha from '../../assets/images/campanha.svg'
import FAQ from '../../assets/images/fag.svg'
import Funil from '../../assets/images/funil.svg'
import Call from '../../assets/images/call.svg'
import Click from '../../assets/images/click.svg'
import Close from '../../assets/images/close.svg'
import SearchIcon from '@/assets/images/search.svg';
import Input from '@/components/Input/Input'
const Filter = ({

}) => {

    const [showFilters, setShowFilters] = useState(false);
    const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  return (
    <S.Filter>
        <form>
        <Input
            placeholder="Filtre por operador"
            leftIcon={<SearchIcon color="#262931" />}
        />
        </form>
        <button onClick={() => setShowFilters(!showFilters)}>
            Mais Filtros
        </button>
        {showFilters && (
            <div>
                <label>Dia</label>
                <input type="date" placeholder='Dia' />
                <label>Mês</label>
                <input type="date" placeholder='Mês' />
                <label>Mês Passado</label>
                <input type="date" placeholder='Mês passado' />
                <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setShowPeriodDropdown(!showPeriodDropdown);
                }}
                >
                Período
                </a>
                {showPeriodDropdown && (
                <div className='show'>
                    <label>Início</label>
                    <input type="date"/>
                    <label>Fim</label>
                    <input type="date"/>
                </div>
                )}
                <input type="text" placeholder='Setores' />
            </div>
        )}
    </S.Filter>
  );
};

export default Filter;




