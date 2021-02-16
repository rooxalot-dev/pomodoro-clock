import { useModal } from '../../hooks/modal'

import { FaCog } from 'react-icons/fa'
import { Container } from './styles'

export default function Header() {
	const { toogleActive } = useModal()

	return (
		<Container>
			<div className='site-name'>TimerPomodoro</div>
			<div className='site-menu'>
				<button onClick={() => toogleActive()}>
					<FaCog />
					<span>Configurações</span>
				</button>
			</div>
		</Container>
	)
}
