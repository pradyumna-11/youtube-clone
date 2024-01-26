import styled from 'styled-components'

export const GamingCardItem = styled.li`
  height: 50vh;
  width: 30%;
  margin-left: 8px;
  margin-right: 6px;
  background-color: transparent;
  list-style-type: none;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    width: 40%;
  }
`

export const GamingCardItemImage = styled.img`
  height: 80%;
  width: 100%;
  border-radius: 6px;
`

export const GamingCardItemTitle = styled.p`
  font-size: 17px;
  margin-top: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
`

export const GamingCardItemViewCount = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #64748b;
  margin-top: 5px;
`
