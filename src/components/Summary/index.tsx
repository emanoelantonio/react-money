import { ArrowCircleDown, ArrowCircleUp, Wallet } from 'phosphor-react'
import * as S from './styles'


export const Summary = () => {
  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>
      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#F75A68'/>
        </header>
        <strong>R$ 1.259,00</strong>
      </S.Card>
      <S.Card variant='green'>
        <header>
          <span>Total</span>
          <Wallet size={32} color='#fff'/>
        </header>
        <strong>R$ 16.141,00</strong>
      </S.Card>
    </S.Container>
  )
}
