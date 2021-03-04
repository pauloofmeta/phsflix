import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
`
export const MovieListContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
`

export const Title = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  strong {
    font-size: 1.3rem;
  }
`

export const FilterButton = styled.button `
  border: 0;
  border-radius: 20px;
  font-size: 1.15rem;
  font-weight: 700;
  padding: .5rem 1rem;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`