import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.red};
  padding: 0.5rem 2.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 2rem;
    font-family: 'Rajdhani', sans-serif;
  }
`

export const UserName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;

`