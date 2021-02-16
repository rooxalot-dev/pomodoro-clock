import React, { createContext, useState, useContext } from 'react'

interface ModalContextData {
	isActive: boolean
	toogleActive(): void
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalProvider: React.FC = ({ children }) => {
	const [isActive, setIsActive] = useState(false)

	const toogleActive = () => {
		setIsActive(!isActive)
	}

	return (
		<ModalContext.Provider
			value={{
				isActive,
				toogleActive,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

function useModal(): ModalContextData {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error('useModal must be within an ModalProvider component')
	}

	return context
}

export { ModalProvider, useModal }
