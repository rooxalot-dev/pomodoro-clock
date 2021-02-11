import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 auto;
	min-width: 540px;
	max-width: 640px;
	width: 70vw;
`

export const Article = styled.article`
	margin-top: 25vh;

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
	font-family: 'Pacifico', cursive;
	font-weight: 400;
	font-size: 40px;
	text-align: center;
	margin: 20px 0 -20px 0;
`

export const Subtitle = styled.h2`
	font-family: 'Pacifico', cursive;
	font-weight: 400;
	font-size: 24px;
	text-align: center;
	margin: 20px 0 50px 0;
`
