import Timer from "../components/Timer";

import { Container, Title } from '../styles/index';

export default function Home() {
  return (
    <Container>
      <Title>Pomodoro Timer</Title>
      <Timer></Timer>
    </Container>
  );
}
