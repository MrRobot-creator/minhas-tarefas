import { Provider } from 'react-redux'
import BarraLateral from './Containers/BarraLateral'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import ListaDeTarefas from './Containers/ListaDeTarefas'

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
