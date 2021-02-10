import { useState, useEffect, useCallback } from "react";
import moment from 'moment';
import { Container, Time, ToogleTimer } from "./styles";

export default function Timer() {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerType, setTimerType] = useState(null);
    const [timer, setTimer] = useState('00:00');
    const [timerInterval, setTimerInterval] = useState(null);

    // Atualiza o timer
    useEffect(() => {
        if (timerStarted) {
            updateTimer(timerType);
        } else {
            stopTimer();
        }
    }, [timerStarted]);

    // Verificar finalização do timer
    useEffect(() => {
        if (timerInterval && timer === '00:00') {
            stopTimer();
        }  
    }, [timer, timerInterval]);

    const configTimer = (timerType: string) => {
        stopTimer();
        setTimerStarted(false);
        setTimerType(timerType);

        switch (timerType) {
            case 'pomodoro':
                setTimer('25:00');
                break;
            case 'short-break':
                setTimer('05:00');
                break;
            case 'long-break':
                setTimer('10:00');
                break;
            case 'teste':
                setTimer('00:03');
                break;
            default:
                return;
        }
    };

    const updateTimer = (timerType) => {
        if (!timerType)
            return;

        const [minute, second] = timer.split(':');
        const dateCountdown = new Date(1980, 1, 1, 0, parseInt(minute), parseInt(second));
        
        setTimer(moment(dateCountdown).format('mm:ss'));

        const interval = setInterval(() => {
            dateCountdown.setSeconds(dateCountdown.getSeconds() - 1);
            const dateFormat = moment(dateCountdown).format('mm:ss');
            setTimer(dateFormat);
        }, 1000);

        setTimerInterval(interval);
    };

    const toogleTimer = useCallback(() => {
        if (timerStarted) {
            setTimerStarted(false);
        } else {
            setTimerStarted(true);
        }
    }, [timerStarted]);

    const stopTimer = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
    };

    return (
        <Container>
            <ul className="timer-type">
                <li><button onClick={() => configTimer('pomodoro')}>Pomodoro</button></li>
                <li><button onClick={() => configTimer('short-break')}>Pausa Curta</button></li>
                <li><button onClick={() => configTimer('long-break')}>Pausa Longa</button></li>
            </ul>
            <Time>
                {timer}
            </Time>
            <ToogleTimer onClick={() => toogleTimer()}>{ timerStarted ? 'Parar' : 'Iniciar' }</ToogleTimer>
        </Container>
    );
}