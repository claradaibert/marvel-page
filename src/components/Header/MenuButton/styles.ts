import styled from "styled-components";

const TOGGLE_SIZE = 1.3;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;

  .toggle {
    width: ${TOGGLE_SIZE}rem;
    height: ${TOGGLE_SIZE * 0.75}rem;
    position: relative;
    margin: ${TOGGLE_SIZE * 0.83}rem auto;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: ${TOGGLE_SIZE * 0.1}rem;
      width: 100%;
      background: ${({ theme }) => theme.pallete_white};
      border-radius: ${TOGGLE_SIZE * 0.15}rem;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    span:nth-child(1) {
      top: 0rem;
    }

    span:nth-child(2),
    span:nth-child(3) {
      top: ${TOGGLE_SIZE * 0.3}rem;
    }

    span:nth-child(4) {
      top: ${TOGGLE_SIZE * 0.6}rem;
    }

    &.open span:nth-child(1) {
      top: ${TOGGLE_SIZE * 0.3}rem;
      width: 0%;
      left: 50%;
    }

    &.open span:nth-child(2) {
      transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
      top: ${TOGGLE_SIZE * 0.3}rem;
      width: 0%;
      left: 50%;
    }
  }
`;
