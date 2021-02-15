import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	background-color: ${(props) => lighten(0.1, props.theme.background)};

	@media (max-width: 640px) {
		justify-content: center;
	}

	.site-name {
		margin-left: 20px;
		font-family: 'Montserrat', cursive;
		font-size: 24px;
	}

	.site-menu {
		margin-right: 20px;
	}
`
