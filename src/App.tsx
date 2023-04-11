import { ThemeProvider } from 'styled-components'
import { Summary } from './components/Summary'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Transactions />
      <Summary/>
    </ThemeProvider>
  )
}
