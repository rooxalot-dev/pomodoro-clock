import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 auto;
	min-width: 480px;
	max-width: 640px;
	width: 65vw;
`

export const Article = styled.article`
	margin-top: 28vh;

	ol,
	ul {
		margin-left: 15px;
	}

	p,
	li {
		line-height: 1.5;
	}
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
