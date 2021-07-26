import styled from 'styled-components'


export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: #6d4c41;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 1rem;

  &:nth-child(1n + 1) {
    margin-left: 1rem;
  }

  &:hover {
    background-color: #3e2723;
    border: 1px solid #6d4c41;
  }
  
`

export const Icon = styled.div`
  color: #ffffff;
  
`

export const SkillName = styled.p`
  margin-top: 1rem;
  color: #999999;
  text-align: center;
`
