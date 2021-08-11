import Me from '../../assets/me.jpeg'
import * as S from './styles'

export const Projects = () => {
  return (
    <S.Container>
      <S.Title>Projetos</S.Title>
      <S.ContentWrapper>
        <S.Card>
          <S.Image src={Me} alt="projeto-1"/>
          <S.Description href="https://ciriasantos.com.br/" target="_blank">Círia Santos Advocacia</S.Description>
        </S.Card>
        <S.Card>
          <S.Image src={Me} alt="projeto-1"/>
          <S.Description href="https://amandamagalhaesadv.com.br/" target="_blank">Amanda Magalhães advocacia</S.Description>
        </S.Card>
      </S.ContentWrapper>
    </S.Container>
  )
}