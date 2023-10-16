/* eslint-disable */
import React, {useState} from 'react'
import Header from '@/components/Header/Header'
import Card from '@/components/Cards/Card'
import * as S from './styles'
import DropDown from '@/components/FilterDropDown/Filter'
import PrivateRoute from '../../helpers/PrivateRoute';
export default function Dashboards() {
    const [showFilters, setShowFilters] = useState(false);
    const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);
  return (
    <S.Wrapper>
        <PrivateRoute>
            <S.ContainerFluid>
                <Header title="Dashboard"/>
            </S.ContainerFluid>
            <S.Container>
                <DropDown/>
                <Card/>
                <S.Row>
                    <S.Left>
                        <p>Atendimentos</p>
                    </S.Left>
                    <S.Right>
                        <p>Top 10 mais atendidos</p>
                    </S.Right>
                </S.Row>
            </S.Container>
        </PrivateRoute>
    </S.Wrapper>
  )
}
