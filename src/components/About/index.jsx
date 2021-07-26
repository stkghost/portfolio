import { useEffect, useState } from 'react';
import Me from "../../assets/me.jpeg";
import * as S from "./styles";

export const About = () => {

  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsShowing(true)
      }

    })

    intersectionObserver.observe(document.querySelector('#container'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <S.Container>
      <S.Header>
        <S.Title>About me</S.Title>
      </S.Header>
      <S.Content>
        <S.ImageContainer id="container" isShowing={isShowing}>
          <S.Image src={Me} alt="me" />
          <S.IconsContainer>
            <a href="https://api.whatsapp.com/send?phone=+5547999722189">
            <S.WhatsIcon />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-souza-9307b9170">
            <S.LinkdnIcon />
            </a>
            <a href="https://github.com/stkghost/">
            <S.InstaIcon />
            </a>
          </S.IconsContainer>
        </S.ImageContainer>

        <S.InfoContainer id="container" isShowing={isShowing}>
          <S.InfoHeader>
            <S.InfoTitle>Hi!</S.InfoTitle>
            <S.InfoDescription>
              👋 I'm Gabriel Souza. Fictional person for preview purposes I'm
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
