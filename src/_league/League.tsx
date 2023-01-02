import { LeagueInterface } from "../domain/interfaces/league";

export function League({ league }: { league: LeagueInterface }) {
	return (
		<article className="league">
			<header>
				{league.name} - {league.type}
			</header>
			<hr />
			<p>
				{
					"Bola-8 es un juego de tiro anunciado jugado con una bola blanca y quince bolas de color numeradas del 1 al 15. Un jugador debe embocar el grupo de bolas del 1 al 7 (lisas), y el otro jugador el grupo del 9 al 15 (rayadas). El jugador que emboque primero su grupo de bolas, y luego la bola 8 legalmente, gana la partida."
				}
			</p>
		</article>
	);
}
