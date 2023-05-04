import { ArrowCircleDown, ArrowCircleUp, Wallet } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'
import * as S from './styles'


export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  }, { income: 0, outcome: 0, total: 0})

  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e'/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.Card>
      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#F75A68'/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.Card>
      <S.Card variant='green'>
        <header>
          <span>Total</span>
          <Wallet size={32} color='#fff'/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.Card>
    </S.Container>
  )
}
