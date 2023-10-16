/* eslint-disable */
import React from 'react';
import Attendances from '@/assets/images/attendances.png' 
import Open from '@/assets/images/open.png'
import Finished  from '@/assets/images/finished.png';
import Time from '@/assets/images/time.png'
import {S, } from '.';
const Card =({

}) => {
    return(
        <S.Container>
            <S.Row>
                <S.Box>
                    <p>Qtd. atendimentos</p>
                    <S.Line>
                        <p>0</p>
                        <img src={Attendances.src} alt="Atendendo" />
                    </S.Line>
                </S.Box>
                <S.Box>
                    <p>Atendimentos abertos</p>
                    <S.Line>
                        <p>0</p>
                        <img src={Open.src} alt="Abertos" />
                    </S.Line>
                </S.Box>
                <S.Box>
                    <p>Atendimentos finalizados</p>
                    <S.Line>
                        <p>--</p>
                        <img src={Finished.src} alt="Finalizados" />
                    </S.Line>
                </S.Box>
                <S.Box>
                    <p>Tempo médio de resposta</p>
                    <S.Line>
                        <p>0</p>
                        <img src={Time.src} alt="Tempo" />
                    </S.Line>
                </S.Box>
            </S.Row>
        </S.Container>
    )
}

export default Card