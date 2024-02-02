import styled from "styled-components";

interface IContainerProps {
  inputStyle?: "red" | "black";
}

export const Container = styled.div<IContainerProps>`
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
          border-color: ${(props) =>
            props.inputStyle === "red"
              ? `${props.theme.contrast_color}`
              : ` ${props.theme.pallete_grey}`} !important;
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
        border-color: ${(props) =>
          props.inputStyle === "red"
            ? `${props.theme.contrast_color}`
            : ` ${props.theme.pallete_grey}`};
        box-shadow: ${props => props.inputStyle === 'red' && `0px 0px 15px ${props.theme.contrast_color}`};
      }
    }
  }
`;
