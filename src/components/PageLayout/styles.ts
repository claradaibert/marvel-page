import styled from "styled-components";

interface IContainerProps {
  sidebarOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background_primary};

  .pageWrap {
    .bodyWrap {
      padding-left: ${(props) => (props.sidebarOpen ? `19rem` : "0rem")};
      transition: 0.25s;
    }
  }
`;
