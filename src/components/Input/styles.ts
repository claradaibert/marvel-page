import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.background_secondary} inset !important;
    color: ${({ theme }) => theme.background_secondary} !important;
  }

  .MuiTextField-root {
    label,
    p {
      &.Mui-focused {
        color: ${({ theme }) => theme.background_secondary} !important;
      }

      &.Mui-error {
        color: red !important;
      }

      color: ${({ theme }) => theme.background_secondary};
    }

    > .MuiInputBase-root {
      &.Mui-focused {
        input {
          color: ${({ theme }) => theme.background_secondary} !important;
        }

        fieldset {
          border-color: ${({ theme }) => theme.background_secondary} !important;
        }
      }

      &.Mui-error {
        label,
        p {
          color: red !important;
        }

        input {
          color: red !important;
        }

        fieldset {
          border-color: red !important;
        }
      }

      input {
        color: ${({ theme }) => theme.background_secondary};
      }

      fieldset {
        border-color: ${({ theme }) => theme.background_secondary};
      }
    }
  }
`;
