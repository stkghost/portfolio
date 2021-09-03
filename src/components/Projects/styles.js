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
  flex-wrap: wrap;

`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  display: flex;
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
  object-fit: contain;
  background: #292929;
  width: 100%;
  height: 230px;
`

export const Description = styled.a`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 100;
  color: #f9f9f9;
  text-align: center;
  text-decoration: none;
  :checked{
    text-decoration: none;
  }
`
