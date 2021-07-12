import gitCat from "../../assets/gitCat.gif";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Gif src={gitCat} alt="github" />
      <S.Title>Gabriel R Souza</S.Title>
      <S.Subtitle>WEB/MOBILE DEVELOPER</S.Subtitle>
    </S.Container>
  );
};
