import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background: linear-gradient(
    157deg,
    #1e1e1e -11.13%,
    rgba(236, 29, 36, 0.87) 94.22%
  );
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 100vh;


  .formBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: ${({theme}) => theme.background_primary};
    border-radius: 15px;
    border: none;
    padding: 3rem 2rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 760px){
        width: 100%;
    }

    img {
      height: 4rem;
    }

    .formContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    a{
      text-decoration: none;
      color: ${({theme}) => theme.pallete_grey};
      font-size: 0.875rem;
      position: relative;
      bottom: 1rem;
    }
  }
`;
