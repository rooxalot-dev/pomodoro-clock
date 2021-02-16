import styled from 'styled-components'
import { lighten } from 'polished'
import ModalHeader from './ModalHeader'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 5;
`

export const Container = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	max-width: 640px;
	border-radius: 10px;
	background-color: ${(props) => lighten(0.2, props.theme.background)};
	color: ${(props) => props.theme.default};
	z-index: 10;
`
