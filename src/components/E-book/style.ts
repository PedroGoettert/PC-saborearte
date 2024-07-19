import styled from 'styled-components'

export const ContainerEBook = styled.section`
  background-color: #eef5e4;
  padding: 11rem 0;
  padding-top: 8rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 450px) {
    padding-top: 11.5rem;
    padding-bottom: 5rem;
  }
`
export const ContentEBook = styled.div`
  width: 80.375rem;
  height: 22.625rem;
  flex-shrink: 0;
  border-radius: var(--Radius-sm, 0.375rem);
  background: var(--Primary-Primary, #514b6c);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  div {
    width: 33rem;
    margin-left: 20rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    h2 {
      color: var(--Base-Base-White, #eef5e4);

      font-family: 'Source Serif 4';
      font-size: 2rem;
      font-weight: 700;
      line-height: 120%;
    }

    p {
      color: var(--Base-Base-White, #eef5e4);

      font-family: 'Inter';
      font-size: 1rem;
      line-height: 120%;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 6rem;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 1300px) {
    width: 95vw;

    div {
      width: 50%;
    }

    img {
      height: 135%;
    }
  }

  @media screen and (max-width: 1024px) {
    img {
      left: 5%;
    }
    div {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 820px) {
    img {
      left: 2%;
    }
  }

  @media screen and (max-width: 450px) {
    align-items: flex-end;
    padding-bottom: 3rem;
    div {
      width: 90%;
      margin: 0;
      text-align: center;

      h2 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
    img {
      height: 80%;
      left: 50%;
      top: -28%;
      transform: translateX(-45%);
    }
  }
`
