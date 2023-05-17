import { ThemeProvider } from 'styled-components'
import { TransacitonsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransacitonsProvider>
        <Transactions />
      </TransacitonsProvider>
    </ThemeProvider>
  )
}
