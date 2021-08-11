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

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: center;

`

export const Card = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  padding: 10px;


  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 2px 20px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 0px 20px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 20px 2px rgba(0,0,0,0.75);
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Description = styled.a`
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  text-decoration: none;
  padding: 10px 0;
  :checked{
    text-decoration: none;
  }
`
