import styled from "styled-components";

interface IContainerProps {
  open: boolean;
  darkMode: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  max-height: ${props => props.open ? '35rem' : '5.5rem'};
  overflow-y: hidden;
  transition: 300ms;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.darkMode
      ? `rgba(236,29,36,0.7)`
      : `rgba(32,32,32, 0.9)`};
  color: ${({ theme }) => theme.pallete_white};

  .topContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.pallete_white};
    margin-bottom: 1rem;

    .title {
      font-size: 1.2rem;
      margin: 1rem 0;
      font-weight: 600;
    }
  }

  .infoList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 15rem;
    overflow-y: scroll;
  }
`;
