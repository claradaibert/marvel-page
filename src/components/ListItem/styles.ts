import styled from "styled-components";

interface IContainerProps {
  containerStyle: "red" | "black";
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  max-height: 5rem;
  border: none;
  border-radius: 5px;
  display: flex;
  gap: 1rem;
  background-color: ${(props) =>
    props.containerStyle === "red"
      ? `rgba(236,29,36,0.7)`
      : `rgba(32,32,32, 0.9)`};
  color: ${({theme}) => theme.pallete_white};
  overflow-y: hidden;
  cursor: pointer;

  .imgContainer {
    height: fit-content;
    display: flex;
    align-items: center;

    img{
        width: 7rem;
    }
  }

  .infoContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

    p.itemName{
        font-size: 1rem;
        font-weight: 600;
    }

    .seeMoreButton {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        gap: 0.5rem;
        align-items: center;
        font-size: 0.875rem;
        border: none;
        background-color: transparent;
        color: ${({theme}) => theme.pallete_white};
    }
  }
`;
