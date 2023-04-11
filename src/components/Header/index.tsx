import logoImg from '../../assets/logo-money.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="" />
        <h2>React Money</h2>

        <S.NewTransactionsButton>
          Nova Transação
        </S.NewTransactionsButton>
      </S.Content>
    </S.Container>
  )
}
