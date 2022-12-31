import { LeagueInterface } from "../domain/interfaces/league";

export function League({ league }: { league: LeagueInterface }) {
	return (
		<article className="league">
			<header>
				{league.name} - {league.type}
			</header>
			<hr />
			<p>hola</p>
		</article>
	);
}
