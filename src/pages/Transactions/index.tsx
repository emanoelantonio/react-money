import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import * as S from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <S.Container>
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <S.PriceHightLight variant='income'>
                R$ 12.000,00
                </S.PriceHightLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <S.PriceHightLight variant='outcome'>
                - R$ 59,00
                </S.PriceHightLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.Container>
    </div>
  )
}
