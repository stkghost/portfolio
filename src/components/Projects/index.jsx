import AmandaAdv from '../../assets/amandaadv-logo.png';
import CiriaAdv from '../../assets/logo-ciria.png';
import gitCat from "../../assets/Octocat.png";
import * as S from './styles';



export const Projects = () => {
  return (
    <S.Container>
      <S.Title>Projects</S.Title>
      <S.ContentWrapper>
        <S.CardWrapper>

        <S.Card>
        <a href="https://ciriasantos.com.br/" target="_blank" rel="noreferrer">
          <S.Image src={CiriaAdv} alt="projeto-1" />
          </a>
        </S.Card>
        <S.Description>Landing page for lawyer office</S.Description>
        </S.CardWrapper>
        <S.CardWrapper>

        <S.Card>
        <a href="https://amandamagalhaesadv.com.br/" target="_blank" rel="noreferrer">
         <S.Image src={AmandaAdv} alt="projeto-2" />
         </a> 
        </S.Card>
        <S.Description>Landing page for lawyer office</S.Description>
        </S.CardWrapper>
    <S.CardWrapper>
        <S.Card>
        <a href="https://github.com/stkghost?tab=repositories" target="_blank" rel="noreferrer">
           <S.Image src={gitCat} alt="github" />
        </a>
        </S.Card>
        <S.Description>See more projects on my Github!</S.Description>
    </S.CardWrapper>
      </S.ContentWrapper>
    </S.Container>
  )
}