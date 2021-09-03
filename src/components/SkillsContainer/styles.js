import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background: #3e2723;
  `

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 100;
  color: #eeeeee;
  margin-bottom: 100px;
`

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  max-width: 1120px;
  flex-wrap: wrap;
  @media (max-width: 768px){
    width: 90%;
  }
`