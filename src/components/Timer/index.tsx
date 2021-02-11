import { useState, useEffect, useCallback } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import moment from 'moment'
import useSound from 'use-sound'
import { Container, Options, Time, ToogleTimer } from './styles'

import alert1 from '../../../public/assets/sounds/alert1.wav'

export default function Timer() {
	const [timerStarted, setTimerStarted] = useState(false)
	const [timerType, setTimerType] = useState(null)
	const [timer, setTimer] = useState('00:00')
	const [duration, setDuration] = useState(0)
	const [timerInterval, setTimerInterval] = useState(null)

	// Estado criado para atualizar o componente de relógio quando um novo timer for configurado
	const [randomKey, setRandomKey] = useState(Math.random() * 1000)

	const [playAlert] = useSound(alert1)

	// Atualiza o timer
	useEffect(() => {
		if (timerStarted) {
			updateTimer(timerType)
		} else {
			stopTimer()
		}
	}, [timerStarted])

	// Verificar finalização do timer
	useEffect(() => {
		if (timerInterval && timer === '00:00') {
			stopTimer()
			playAlert()
		}
	}, [timer, timerInterval])

	const configTimer = (timerType: string) => {
		stopTimer()
		setTimerStarted(false)
		setTimerType(timerType)

		let newTimer = '00:00'

		switch (timerType) {
			case 'pomodoro':
				newTimer = '25:00'
				break
			case 'short-break':
				newTimer = '05:00'
				break
			case 'long-break':
				newTimer = '10:00'
				break
			case 'teste':
				newTimer = '00:03'
				break
			default:
				newTimer = '00:00'
				break
		}

		setTimer(newTimer)
		const [minute, second] = newTimer.split(':')
		const dateCountdown = new Date(
			1980,
			1,
			1,
			0,
			parseInt(minute),
			parseInt(second)
		)
		const finalDateCountdown = moment(new Date(1980, 1, 1, 0, 0, 0))
		const diffDuration = moment(dateCountdown).diff(finalDateCountdown, 's')
		setDuration(diffDuration)
		setRandomKey(Math.random() * 1000)

		console.log('duration', duration)
	}

	const updateTimer = (timerType) => {
		if (!timerType) return

		const [minute, second] = timer.split(':')
		const dateCountdown = new Date(
			1980,
			1,
			1,
			0,
			parseInt(minute),
			parseInt(second)
		)

		setTimer(moment(dateCountdown).format('mm:ss'))

		const interval = setInterval(() => {
			dateCountdown.setSeconds(dateCountdown.getSeconds() - 1)
			const dateFormat = moment(dateCountdown).format('mm:ss')
			setTimer(dateFormat)
		}, 1000)

		setTimerInterval(interval)
	}

	const toogleTimer = useCallback(() => {
		if (timerStarted) {
			setTimerStarted(false)
		} else {
			setTimerStarted(true)
		}
	}, [timerStarted])

	const stopTimer = () => {
		if (timerInterval) {
			clearInterval(timerInterval)
			setTimerInterval(null)
			setTimerStarted(false)
		}
	}

	return (
		<>
			<Options>
				<li>
					<button className='pomodoro' onClick={() => configTimer('pomodoro')}>
						Pomodoro
					</button>
				</li>
				<li>
					<button className='short' onClick={() => configTimer('short-break')}>
						Pausa Curta
					</button>
				</li>
				<li>
					<button className='long' onClick={() => configTimer('long-break')}>
						Pausa Longa
					</button>
				</li>
				<li>
					<button className='teste' onClick={() => configTimer('teste')}>
						Teste
					</button>
				</li>
			</Options>

			<Container>
				<CountdownCircleTimer
					key={randomKey}
					isPlaying={timerStarted}
					duration={duration}
					size={280}
					colors={[['#00B689', 1]]}
				>
					<Time>{timer}</Time>
				</CountdownCircleTimer>

				<ToogleTimer onClick={() => toogleTimer()}>
					{timerStarted ? 'Parar' : 'Iniciar'}
				</ToogleTimer>
			</Container>
		</>
	)
}
