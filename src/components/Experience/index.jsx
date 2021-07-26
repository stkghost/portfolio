import React from "react";
import { RiCodeSSlashLine } from 'react-icons/ri';
import * as S from "./styles";

const skillsUsed1 = [
  'Javascript',
  'React JS',
  'CSS',
  'HTML',
  'UX'
]

const skillsUsed2 = [
  'Javascript',
  'Typescript',
  'React JS',
  'Next JS',
  'React-Native',
  'CSS',
  'HTML',
  'UX'
]


export const Experience = () => {
  return (
    <S.Container>
      <S.Title>Experiência</S.Title>
      <S.TimeLineContainer>

        <S.TimeLineComponent
          lineColor="#999"
        >
          <S.TimeLineEventComponent
            contentStyle={{boxShadow:  '0 0 0 transparent'}}
            icon={<RiCodeSSlashLine />}
            iconColor="#999"
          >
            <S.Header>Macohin Gestão Processual - Balneário Camboriú - SC</S.Header>
              <S.ContentTitle>Responsável pelas funções de técnico em informática e desenvolvedor web para escritório de advocacia.</S.ContentTitle>
            <S.LabelsContainer>
              {skillsUsed1.map((skill, index) => (
                <S.Labels key={index}> {skill}</S.Labels>
              ))}
            </S.LabelsContainer>
           
          </S.TimeLineEventComponent>          
        </S.TimeLineComponent>

        <S.TimeLineComponent
          lineColor="#999"
        >
          <S.TimeLineEventComponent
            contentStyle={{boxShadow:  '0 0 0 transparent'}}
            icon={<RiCodeSSlashLine />}
            iconColor="#999"
          >            <S.Header>DWV APP - Itampema - SC</S.Header>
              <S.ContentTitle>Desenvolvedor web e mobile de telas e funcionalidades refente ao produto utilizado por corretores e construtoras.</S.ContentTitle>
              <S.LabelsContainer>
              {skillsUsed2.map((skill, index) => (
                <S.Labels key={index}> {skill}</S.Labels>
              ))}
            </S.LabelsContainer>
          </S.TimeLineEventComponent>          
          
        </S.TimeLineComponent>

      </S.TimeLineContainer>
      
    </S.Container>
  );
};
