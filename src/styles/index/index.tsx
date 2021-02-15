import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
	margin: 0 auto;
	max-width: 640px;
	width: 100vw;

	@media (max-width: 640px) {
		margin: 0 10px;
	}
`

export const Article = styled.article`
	margin-top: 28vh;

	ol,
	ul {
		margin-left: 15px;
	}

	ol {
		list-style: none;
		counter-reset: counter;
	}

	p,
	li {
		line-height: 1.5;
		counter-increment: counter;
	}

	ol li::before {
		content: counter(counter) '. ';
		font-weight: bold;
		margin-right: 5px;
	}
`

export const ArticleSection = styled.div`
	background-color: ${(props) => lighten(0.05, props.theme.background)};
	border-radius: 10px;
	padding: 50px 30px;
`

export const Title = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 40px;
	letter-spacing: 0.2px;
	text-align: center;
	margin: 20px 0;
`

export const Subtitle = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 24px;
	letter-spacing: 0.2px;
	text-align: center;
	margin: 20px 0 50px 0;
`
