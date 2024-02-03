import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  padding: 2rem;
  margin-top: 8rem;
  gap: 2rem;

  .pageTitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.background_secondary};
  }

  .searchBar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: 760px) {
      flex-direction: column;
    }

    button {
      border: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: ${({ theme }) => theme.contrast_color};
      display: flex;
      gap: 0.5rem;
      align-items: center;

      :last-child {
        font-size: 1rem;
      }

      @media screen and (max-width: 760px) {
        width: 100%;
        justify-content: flex-end;
      }
    }
  }

  .circularProgressContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;

    span.MuiCircularProgress-root {
      color: ${({ theme }) => theme.background_secondary};
    }
  }
`;
