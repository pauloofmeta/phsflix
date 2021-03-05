import styled from "styled-components";

export const Overlay = styled.div `
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Contianer = styled.div `
  background: ${props => props.theme.backgrounds.lightest};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  text-align: left;
  position: relative;

  strong {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`
// export const GenreList = styled.ul `
  
// `

// export const GenreChip = styled.li `
//   display: inline-flex;
//   border: 1px solid ${props => props.theme.colors.white};
//   border-radius: 20px;
//   padding: .2rem 1rem;
//   margin-top: .5rem;
//   margin-right: .3rem;
//   cursor: pointer;

//   :hover {
//     background-color: ${props => props.theme.colors.blue};
//     border-color: ${props => props.theme.colors.blue};
//   }
// `

export const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.red};
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`