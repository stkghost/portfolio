import gitCat from "../../assets/Octocat.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Gif src={gitCat} alt="github" />
      <S.Title>Gabriel R. Souza</S.Title>

      <S.Subtitle
        steps={[
          'JAVASCRIPT', 2000,
          'REACT JS', 2000,
          'HTML', 2000,
          'CSS', 2000,
          'TYPESCRIPT', 2000,
          'REACT NATIVE', 2000,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    </S.Container>
  );
};
