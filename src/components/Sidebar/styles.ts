import styled from "styled-components";

interface IContainerProps {
  open: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: fixed;
  background: rgba(236, 29, 36, 1);
  display: flex;
  color: ${({theme}) => theme.pallete_white};
  flex-direction: column;
  z-index: 10;
  top: 6rem;
  left: ${(props) => (props.open ? 0 : `-110%`)};
  height: calc(100vh - 6rem);
  transition: 0.2s ease-out;
  padding: 2rem;
  gap: 1.5rem;
  box-shadow: 0px 0px 30px ${({theme}) => theme.contrast_color};

  width: 19rem;

  @media screen and (max-width: 460px) {
    width: 100%;
  }

  .items {
      display: flex;
      gap: 1rem;
      font-size: 1rem;
      width: 100%;
      align-items: center;
      background-color: transparent;
      border: none;
      color: ${({theme}) => theme.pallete_white};

      :first-child {
        font-size: 1.2rem;
      }
    }
`;
