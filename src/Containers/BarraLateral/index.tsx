import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = { mostrarFiltros: boolean }

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                criterio="status"
                legenda={'pendentes'}
                valor={enums.Status.PENDENTE}
              />
              <FiltroCard
                criterio="status"
                legenda={'concluídas'}
                valor={enums.Status.CONCLUIDA}
              />
              <FiltroCard
                criterio="prioridade"
                legenda={'urgentes'}
                valor={enums.Prioridade.URGENTE}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="importantes"
                valor={enums.Prioridade.IMPORTANTE}
              />
              <FiltroCard
                criterio="prioridade"
                legenda={'normal'}
                valor={enums.Prioridade.NORMAL}
              />
              <FiltroCard criterio="todas" legenda={'todas'} />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a Lista de Tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
