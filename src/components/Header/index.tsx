import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo-money.svg'
import { NewTransactionModal } from '../NewTransactionModel'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="" />
        <h2>React Money</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionsButton>Nova Transação</S.NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>

      </S.Content>
    </S.Container>
  )
}
