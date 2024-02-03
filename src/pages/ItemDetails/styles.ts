import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  padding: 2rem;
  margin-top: 8rem;
  gap: 2rem;

  .loadingContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span.MuiCircularProgress-root {
      color: ${({ theme }) => theme.background_secondary};
    }
  }

  .header {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    color: ${({ theme }) => theme.background_secondary};
  }

  .itemInfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: fit-content;
    transition: height 1s;

    .isOpen {
      height: fit-content;
    }
  }
`;
