import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        max-width: 100vw;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            width: 0.4rem;
        }

        ::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.background_primary};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.background_secondary};
            border-radius: 10px;
        }
    }

    button {
        cursor: pointer;
    }

`;

export { GlobalStyle };