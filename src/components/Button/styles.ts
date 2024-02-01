import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    background-color: ${({theme}) => theme.contrast_color};
    // preciso adicionar essas cores como variáveis neutras também
    color: '#FOFOFO';
`