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
  box-shadow: 0px 0px 30px ${({ theme }) => theme.contrast_color};
  z-index: 4;

  .logoContainer {
    width: 10rem;
    overflow-x: hidden;

    svg {
      position: relative;
      right: 50px;
      height: 5.2rem;
    }
  }

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

  .navMenu {
    border: none;
    width: fit-content;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.pallete_white};
    font-size: 1.5rem;
  }
`;
