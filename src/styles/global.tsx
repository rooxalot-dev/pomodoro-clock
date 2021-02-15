import { createGlobalStyle } from 'styled-components'
import { darken, lighten } from 'polished'

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
			font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        border: none;
        background-color: ${(props) => darken(0.1, props.theme.background)};
        color: #fff;
        padding: 10px;
        border-radius: 4px;
				transition: all 0.2s ease-in-out;

        &:hover {
					background-color: ${(props) => props.theme.background};
        }

        &:active, &:focus {
					background-color: ${(props) => props.theme.background};
        }
    }

    html,
    body {
			font-family: 'Montserrat', sans-serif;
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.default};
    }
`
