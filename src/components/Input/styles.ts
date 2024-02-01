import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.contrast_color} inset !important;
    color: ${({ theme }) => theme.font_primary} !important;
  }

  .MuiTextField-root {
    label,
    p {
      &.Mui-focused {
        color: ${({ theme }) => theme.font_primary} !important;
      }

      &.Mui-error {
        color: red !important;
      }

      color: ${({ theme }) => theme.font_primary};
    }

    > .MuiInputBase-root {
      &.Mui-focused {
        input {
          color: ${({ theme }) => theme.font_primary} !important;
        }

        fieldset {
          border-color: ${({ theme }) => theme.font_primary} !important;
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
        color: ${({ theme }) => theme.font_primary};
      }

      fieldset {
        border-color: ${({ theme }) => theme.contrast_color};
      }
    }
  }
`;
