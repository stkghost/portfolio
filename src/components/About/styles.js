import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { RiLinkedinLine } from 'react-icons/ri'
import styled, { keyframes } from 'styled-components'


const cardAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: translateX(-400px)
  }
  100% {
    opacity: 1;
  }
`



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efefef;
  padding-bottom: 50px;
`

export const Title = styled.p`
  color: #606060;
  font-size: 2rem;
  font-weight: 100;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  width: 200px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eeeeee;
  background: #efefef;
  box-shadow:  7px 7px 8px #606060,
  -7px -7px 8px #ffffff;
  animation: ${({ isShowing }) => isShowing ? cardAnimation : ''};
  animation-duration: 2s;
  animation-fill-mode: forwards;


  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 280px;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
`

export const WhatsIcon = styled(FaWhatsapp)`
  height: 20px;
  width: 20px;
  color: #34af23;
  cursor: pointer;

  &:hover {
    color: #000000;
    
  }
`

export const LinkdnIcon = styled(RiLinkedinLine)`
  height: 20px;
  width: 20px;
  color: #007bb6;
  cursor: pointer;

  &:hover {
    color: #000000;
    
  }
`

export const InstaIcon = styled(FaGithub)`
  height: 20px;
  width: 20px;
  color: #6e5494;
  cursor: pointer;


  &:hover {
    color: #000000;
    
  }

`

export const InfoContainer = styled.div`
  height: 250px;
  width: 50%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efefef;
  box-shadow:  7px 7px 8px #606060,
             -7px -7px 8px #ffffff;
  padding: 20px;
  animation: ${({ isShowing }) => isShowing ? cardAnimation : ''};
  animation-duration: 2s;
  animation-fill-mode: forwards;

`


export const InfoHeader = styled.div`
    margin-bottom: 20px;
`

export const InfoTitle = styled.p`
  font-size: 1.5rem;
`

export const InfoDescription = styled.p`
  font-size: 0.9rem;
`

