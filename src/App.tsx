import { Provider } from 'react-redux'
import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
