import React, { useState, useEffect } from 'react'
import { AiOutlineClose as Close } from 'react-icons/ai'

import { useModal } from '../../hooks/modal'
import { Overlay, Container } from '../Modal/styles'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'

interface ModalContent {
	HeaderContent?: React.FC | Element
}

const Modal: React.FC<ModalContent> = ({ HeaderContent, children }) => {
	const { isActive, toogleActive } = useModal()

	return (
		!!isActive && (
			<Overlay>
				<Container>
					<ModalHeader>
						{HeaderContent}
						<a
							onClick={() => {
								toogleActive()
							}}
						>
							<Close color='white' size={25} />
						</a>
					</ModalHeader>
					<ModalContent>{children}</ModalContent>
				</Container>
			</Overlay>
		)
	)
}

export default Modal
