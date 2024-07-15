import styled from 'styled-components'
import backgroud from '../../assets/backgroud.png'
import backgroudMobile from '../../assets/backgroudMobile.png'

export const ContainerCapturePage = styled.main`
  overflow: hidden;
  background-color: #fdeff2;
`

export const ContainerContentOne = styled.section`
  max-width: 1360px;
  width: 100vw;
  margin: 0 auto;

  background: url(${backgroud});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    max-width: 100vw;
  }

  @media screen and (max-width: 820px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 690px) {
    background-position-x: -8rem;
  }

  @media screen and (max-width: 590px) {
    background-position-x: -12rem;
  }

  @media screen and (max-width: 550px) {
    background: url(${backgroudMobile});
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
  }
`

export const ContentOne = styled.div`
  width: 45rem;
  margin-right: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  h1 {
    padding-top: 4rem;
    color: #514b6c;
    text-align: center;

    font-family: 'Source Serif 4';
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }

  p {
    margin-top: 1rem;

    color: #514b6c;
    text-align: center;

    font-family: 'Inter';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  @media screen and (max-width: 1280px) {
    h1 {
      max-width: 80%;
      font-size: 1.5rem;
    }

    p {
      max-width: 80%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 872px) {
    h1 {
      max-width: 90%;
    }

    p {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 820px) {
    width: 80vw;
    margin: 0;
    h1 {
      max-width: 90%;
    }

    p {
      max-width: 90%;
    }

    @media screen and (max-width: 779px) {
      width: 100vw;
      align-items: flex-start;
      margin-left: 3rem;

      h1 {
        width: 70%;
        font-size: 1.15rem;
      }

      p {
        width: 70%;
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 736px) {
    width: 80vw;
    h1 {
      width: 90%;
    }

    p {
      width: 90%;
    }
  }

  @media screen and (max-width: 590px) {
    h1 {
      width: 85%;
    }

    p {
      width: 85%;
    }
  }

  @media screen and (max-width: 550px) {
    width: 90vw;
    margin: 0;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    width: 90vw;

    h1 {
      width: 100%;
      font-size: 2rem;
    }

    p {
      width: 100%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 370px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`

export const ContainerContentTwo = styled.section`
  background-color: #eef5e4;

  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;

    color: #514b6c;

    font-family: 'Source Serif 4';
    font-size: 2.5rem;

    font-weight: 700;
    line-height: 120%;
  }

  @media screen and (max-width: 626px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 510px) {
    align-items: center;

    h2 {
      width: 70%;
      text-align: center;
    }
  }

  @media screen and (max-width: 486px) {
    h2 {
      width: 90%;
    }
  }
`

export const ContentTwo = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 30.75rem 30.75rem;
  gap: 1.25rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    svg {
      padding: 0.3rem 1rem;
      background-color: #514b6c;
      border-radius: 25rem;
      font-size: 3rem;
      margin-right: 1.25rem;
    }

    p {
      color: #514b6c;

      font-family: 'Inter';
      font-size: 1rem;
      line-height: 120%;

      span {
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 1022px) {
    grid-template-columns: 45% 45%;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    gap: 1rem;
    div {
      margin-bottom: 2rem;
      svg {
        font-size: 2rem;
        padding: 0.3rem 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 80vw;
    display: flex;
    flex-direction: column;

    div {
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    div {
      svg {
        font-size: 3rem;
        padding: 0rem 1rem;
      }
    }
  }
`
