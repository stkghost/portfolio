import * as S from "./styles";

export const SkillCard = ({ data }) => {

  return (
    <>
      {data.map((skill) => (
        <S.SkillCard key={skill.id}>
          {skill.icon}
          <S.SkillName>{skill.title}</S.SkillName>
        </S.SkillCard>
      ))}
    </>
  );
};
