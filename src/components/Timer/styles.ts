import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60px;
	padding: 35px;
	border-radius: 45%;
	background-color: ${(props) => darken(0.1, props.theme.background)};
	box-shadow: 0px 0px 20px ${(props) => lighten(0.1, props.theme.primary)};
`

export const Options = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	list-style: none;
	text-align: center;

	li button {
		margin-top: 10px;
		font-size: 20px;
		transition: transform 0.2s ease-in;

		&.pomodoro {
			background: ${(props) => lighten(0.1, props.theme.primary)};
		}

		&.short {
			background: ${(props) => lighten(0.1, props.theme.secondary)};
		}

		&.long {
			background: ${(props) => props.theme.secondary};
		}

		&.teste {
			background: ${(props) => darken(0.1, props.theme.background)};
		}

		&:hover {
			transform: scale(1.06);
		}
	}
`

export const Time = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 25px 0;
	font-size: 70px;
	color: ${(props) => props.theme.default};
`

export const ToogleTimer = styled.button`
	display: block;
	margin: 30px auto;
	font-size: 40px;

	&:hover {
		transform: scale(1.06);
	}
`
