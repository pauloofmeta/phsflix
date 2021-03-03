import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
`
export const MovieListContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
`