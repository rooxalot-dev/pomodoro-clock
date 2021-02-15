import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 60px;
	height: 650px;
	padding: 35px;
	border-radius: 10px;
	background-color: ${(props) => lighten(0.04, props.theme.background)};
	box-shadow: 10px 10px 20px ${(props) => darken(0.1, props.theme.background)};
`

export const Options = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	list-style: none;
	text-align: center;
	width: 100%;

	@media (max-width: 640px) {
		margin-top: 25px;
		flex-direction: column;
	}

	li button {
		margin-top: 10px;
		font-size: 20px;
		transition: transform 0.2s ease-in;
		background: ${(props) => darken(0.1, props.theme.background)};

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
	font-size: 50px;
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
