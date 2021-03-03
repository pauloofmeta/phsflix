import styled from "styled-components";

export const Container = styled.div `
  margin: 1rem 1rem;

  background: ${props => props.theme.backgrounds.lightest};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.backgrounds.dark};
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  display: flex;
  flex-direction: column; 
  margin-top: 1rem;
`

export const MovieImg = styled.div `
  img {
    width: 100%;
    height: 100%;
  }
`

export const MovieInfo = styled.div `
  padding: 0.5rem 1rem;

  strong {
    font-weight: 700;
    font-size: 1rem;
  }

  p {
    color: #8c8c8c;
    font-size: 0.8rem;
  }
`