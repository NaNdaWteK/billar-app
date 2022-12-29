import { LeagueInterface } from "../domain/interfaces/league";

export function League({ league }: { league: LeagueInterface }) {
	return (
		<article>
			<header>
				{league.name} - {league.type}
			</header>
		</article>
	);
}
