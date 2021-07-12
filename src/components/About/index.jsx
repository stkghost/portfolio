import Me from "../../assets/me.jpeg";
import * as S from "./styles";

export const About = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>About me</S.Title>
      </S.Header>
      <S.Content>
        <S.ImageContainer>
          <S.Image src={Me} alt="me" />
          <S.IconsContainer>
            <S.WhatsIcon />
            <S.LinkdnIcon />
            <S.InstaIcon />
          </S.IconsContainer>
        </S.ImageContainer>

        <S.InfoContainer>
          <S.InfoHeader>
            <S.InfoTitle>Hi!</S.InfoTitle>
            <S.InfoDescription>
              👋 I'm Gabriel Souza. Fictional person for preview purposes :) I'm
              working with newest front-end frameworks like Angular, React and
              Vue. What you are seeing now is portfolio template from
              Dorota1997. If you like this portfolio template, make sure to ⭐
              the repository to make it more recognizable for other users. Thank
              you
            </S.InfoDescription>
          </S.InfoHeader>
        </S.InfoContainer>
      </S.Content>
    </S.Container>
  );
};
