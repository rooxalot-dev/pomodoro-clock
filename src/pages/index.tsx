import Timer from "../components/Timer";

import { Container, Title, Subtitle } from '../styles/index';

export default function Home() {
  return (
    <Container>
      <Title>Pomodoro Timer</Title>
      <Subtitle>Turbine sua produtividade!</Subtitle>
      <Timer></Timer>
    </Container>
  );
}
