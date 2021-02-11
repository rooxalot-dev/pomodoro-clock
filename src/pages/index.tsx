import Timer from '../components/Timer'

import { Container, Title, Subtitle, Article } from '../styles/index'
import content from '../helpers/content.json'

export default function Home() {
	type Content = {
		intro: string
		about: string
		whatFor: string
		howTo: string
	}

	const jsonContent = content as Content

	return (
		<Container>
			<Title>TimerPomodoro</Title>
			<Subtitle>Turbine sua produtividade!</Subtitle>
			<Timer></Timer>

			<Article>
				<h3>Método pomodoro: aprenda a gerenciar melhor seu tempo</h3>
				<br />
				<p>
					O método pomodoro é uma técnica popular de gerenciamento de tempo
					criada em 1988 pelo italiano Francesco Cirillo, dono de uma empresa de
					consultoria sediada em Berlim, na Alemanha. Cirillo é autor do livro
					The Pomodoro Technique (ou “A técnica pomodoro”), publicado no Brasil
					pela editora Sextante. Ele diz que desenvolveu o método depois de
					descobrir que era possível melhorar a produtividade registrando quanto
					tempo uma tarefa leva para ser concluída e aprendendo a controlar
					todas as tarefas do dia a dia.
				</p>
				<br />
				<p>
					O método pomodoro consiste em realizar uma tarefa por vez, em períodos
					de 25 minutos ininterruptos, evitando distrações e a prática da
					procrastinação. Cada “pomodoro” realizado deve ser intercalado com uma
					pausa de 5 minutos. A cada quatro pomodori, você pode fazer uma pausa
					maior, de 15 a 30 minutos, como recompensa. O método completo dura
					duas horas.
				</p>
				<p>
					Pomodoro, em italiano, significa tomate, no singular. No método
					pomodoro, o tempo é dividido em períodos de 25 minutos. A cada quatro
					pomodori (ou seja, “quatro tomatinhos”, no plural), você completa um
					pomodoro. Este é método simples que pode facilitar muito o cumprimento
					das suas metas diárias.
				</p>
				<br />

				<h3>Como aplicar o método pomodoro</h3>
				<br />
				<p>
					<ol>
						<li>Tenha em mãos um cronômetro e uma lista de tarefas.</li>
						<li>
							Defina o cronômetro para 25 minutos e concentre-se em uma única
							tarefa até que ele toque.
						</li>
						<li>
							Quando sua sessão terminar, marque um pomodoro na sua lista (um
							tomatinho) e registre a tarefa que você completou.
						</li>
						<li>
							Faça a pausa de cinco minutos, mesmo que você não tenha chegado a
							cumprir a tarefa no período de 25 minutos.
						</li>
						<li>
							Após registrar quatro pomodori, faça um intervalo mais longo e
							restaurador, de 10 minutos
						</li>
						<li>
							Durante as pausas, evite fazer grande esforço mental ou tarefas
							complexas. Use seu tempo de descanso para ir ao banheiro, comer
							alguma coisa, verificar as redes sociais, brincar com seu animal
							de estimação ou simplesmente não fazer nada.
						</li>
						<li>
							Dicas: tarefas mais curtas caminham juntas. Qualquer tarefa que
							leve menos de um pomodoro deve ser combinada com outras tarefas
							simples. Por exemplo, "escrever cheque de aluguel", "marcar
							consulta com o veterinário" e "ler artigo no jornal" podem fazer
							parte da mesma sessão de 25 minutos.
						</li>
						<li>
							Tarefas mais complexas, que durem mais de 25 minutos, devem ser
							divididas. Se, eventualmente, você passar o período de 25 minutos
							em uma tarefa, aplique uma pausa mais longa para compensar. Por
							exemplo, se você demorar meia hora para completar uma tarefa, faça
							uma pausa de 10 minutos. O ideal é nunca ultrapassar o tempo
							estabelecido, para não perder o controle da programação.
						</li>
						<li>
							Evite interromper a atividade que você se dispôs a fazer durante
							um pomodoro. Pode ser tentador parar sua atividade para atender o
							telefone, verificar e-mails ou mensagens no WhatsApp, por exemplo,
							mas tente anotar essas atividades para fazê-las depois. Para isso,
							você pode utilizar papel e caneta, uma agenda ou um organizador de
							tarefas digital.
						</li>
						<li>
							No caso de uma interrupção inevitável, faça uma pausa de cinco
							minutos e comece novamente. Cirillo recomenda que você acompanhe
							as interrupções (internas ou externas) à medida que elas ocorrem e
							reflita sobre como evitá-las na próxima sessão.
						</li>
						<li>
							A regra se aplica mesmo se você terminar a tarefa antes de o
							cronômetro desligar. Use o resto do seu tempo para aprender um
							pouco mais sobre aquela tarefa, melhorar as habilidades ou o
							escopo de conhecimento.
						</li>
					</ol>
				</p>
				<br />

				<h3>Vantagens do método pomodoro</h3>
				<br />
				<p>
					A técnica pomodoro pode proporcionar uma série de melhorias e
					benefícios para o seu dia a dia. Confira alguns:
				</p>
				<br />
				<ul>
					<li>Alivia a ansiedade</li>
					<li>Eleva o foco e a concentração</li>
					<li>Evita que você passe muito tempo trabalhando</li>
					<li>Previne a síndrome de burnout</li>
					<li>Aumenta a motivação, através do método de recompensa</li>
					<li>
						Melhora os processos de trabalho ou de estudo, de maneira a
						gerenciar o tempo melhor
					</li>
					<li>Torna suas decisões mais acertadas</li>
					<li>
						Previne estresse, depressão e outros problemas de saúde mental
					</li>
				</ul>
				<br />
				<br />
			</Article>
		</Container>
	)
}
