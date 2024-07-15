import styled from 'styled-components'

export const ContainerForm = styled.form`
  width: 85%;

  display: flex;
  flex-direction: column;

  align-items: center;

  label {
    align-self: flex-start;
    margin-bottom: 0.5rem;
    margin-top: 0.8rem;

    font-family: 'Inter';
  }

  input {
    width: 100%;
    height: 3.4375rem;
    padding-left: 1rem;
    border-radius: 0.375rem;
    background: #fff;

    border: none;

    color: #bbb7cd;

    font-family: 'Inter';
    font-size: 1.125rem;

    line-height: 120%;
  }

  button {
    width: 18.1875rem;
    height: 3.1875rem;
    margin-top: 1.25rem;
    color: #eef5e4;

    font-family: 'Inter';
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 120%;

    border: none;
    border-radius: 0.625rem;
    background: #766e9a;
  }

  @media screen and (max-width: 1280px) {
    max-width: 80%;

    input {
      height: 3rem;
    }

    label {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 940px) {
    input {
      height: 2rem;
    }

    button {
      width: 15rem;
      height: 3rem;
    }
  }

  @media screen and (max-width: 779px) {
    max-width: 70%;
  }

  @media screen and (max-width: 736px) {
    max-width: 90%;
  }

  @media screen and (max-width: 590px) {
    width: 85%;
  }

  @media screen and (max-width: 450px) {
    padding-bottom: 3rem;
    input {
      height: 3rem;
    }

    button {
      height: 4rem;
      font-size: 1rem;
    }
  }
`
