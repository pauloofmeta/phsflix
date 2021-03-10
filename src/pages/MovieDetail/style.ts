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

export const MovieTitle = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: row;
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

export const MovieInfo = styled.div`
  padding-left: 2rem;

  .title {
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

  .genres {
    padding: 0 .5rem;
    display: inline-flex;
    list-style: none;

    li ~ li::before {
      content: ', '
    }
  }

  .overview {
    padding-top: 2rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  
`