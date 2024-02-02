import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.contrast_color};
    color: ${({theme}) => theme.pallete_white};
    padding: 1rem;

    span.MuiCircularProgress-root {
        color: ${({theme}) => theme.pallete_white};
    }
`