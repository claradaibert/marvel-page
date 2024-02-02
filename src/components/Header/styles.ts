import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  background: linear-gradient(
    0deg,
    rgba(236, 29, 36, 1) 0%,
    rgba(109, 29, 32, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.pallete_white};
  font-size: 1rem;
  box-shadow: 0px 0px 30px ${({theme}) => theme.contrast_color};
  z-index: 4;

  .themeToggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.pallete_white};
    font-size: 1rem;

    :first-child {
      font-size: 1.2rem;
    }
  }

  .navigationMenu {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-evenly;

    .navMenu {
      border: none;
      width: fit-content;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.pallete_white};
      font-size: 1rem;
    }

    .navMenu.exitButton {
        width: 6rem;
    }
  }
`;
