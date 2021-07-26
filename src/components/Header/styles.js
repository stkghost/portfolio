import Typical from 'react-typical'
import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3e2723;
  height: 100vh;
`

export const GifContainer = styled.div``

export const Gif = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-bottom: 20px;
  object-fit: contain;
  box-shadow: inset 0px -8px 5px rgba(255, 255, 255, 0.3),
  -1px 2px 5px rgba(255, 255, 255, 0.3);
              
`

export const Title = styled.p`
  color: #eeeeee;
  font-size: 2.5rem;
`

export const Subtitle = styled(Typical)`
  color: #eeeeee;
  font-size: 1.8rem;
  font-weight: 100;

`

