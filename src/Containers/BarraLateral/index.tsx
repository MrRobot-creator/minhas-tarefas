import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard contador={3} legenda={'pendentes'} />
        <FiltroCard contador={3} legenda={'concluídas'} />
        <FiltroCard contador={3} legenda={'urgentes'} />
        <FiltroCard contador={3} legenda={'importantes'} />
        <FiltroCard contador={3} legenda={'normal'} />
        <FiltroCard ativo contador={3} legenda={'todas'} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
