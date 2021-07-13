import { SkillCard } from "../SkillCard/index";
import skills from "./data";
import * as S from "./styles";

export const SkillsContainer = () => {
  return (
    <S.Container>
      <S.Title>Skills</S.Title>
      <S.SkillsContainer>
        <SkillCard data={skills} />
      </S.SkillsContainer>
    </S.Container>
  );
};
