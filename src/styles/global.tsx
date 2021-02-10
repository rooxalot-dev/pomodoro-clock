import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: ${props => props.theme.secondary};
        color: #fff;
        padding: 10px;
        transition: background 0.2s ease-in-out;
        border-radius: 4px;

        &:hover {
            background: ${props => darken(.1, props.theme.secondary)};
        }

        &:active, &:focus {
            background: ${props => darken(.1, props.theme.secondary)};
        }
    }

    html,
    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.primary};
        font-family: 'Roboto', sans-serif;
    }
`;