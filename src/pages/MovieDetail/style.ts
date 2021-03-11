import styled from "styled-components";

export const Container = styled.div`

`
export interface MovieTitleContainerProps {
  img: string;
}

export const MovieTitleContainer = styled.div<MovieTitleContainerProps>`
  border-bottom: 1px solid #211e27;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});

  .titleContainerWrapper {
    background-image: linear-gradient(to right,rgb(34 36 53) 150px,rgb(62 63 68 / 84%) 100%);
  }
`

export const MovieHeader = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: max-content;
  grid-column-gap: 1rem;

  div:nth-child(1) {
    grid-row: 1 / 3;
  }

  @media(max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 1rem;

    div:nth-child(1) {
      grid-row: 2;
    }

    div:nth-child(2) {
      grid-row: 1;
      width: 100%;
    }
  }
`

export const MoviePoster = styled.div`
  overflow: hidden;
  border-radius: 4px;
  min-width: 300px;
  width: 300px;
  height: 450px;

  img {
    display: block;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    border-width: 0px;
    outline: none;
  }
`

export const MovieTitle = styled.div`
  .titleTop {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    strong {
      font-size: 2.2rem;
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
      font-weight: 100;
      margin-left: .5rem;
    }
  }

  .titleInfo {
    .genres {
      padding: 0 .5rem;
      display: inline-flex;
      list-style: none;

      li ~ li::before {
        content: ', '
      }
    }
  }
`

export const MovieInfo = styled.div`
  

  .overview {
    padding-top: 1rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  
`