/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { LeagueInterface } from "../domain/interfaces/league";
import { trans } from "../domain/translations";

export function League({ league }: { league: LeagueInterface }) {
	return (
		<article className="league">
			<header>
				{league.name} - {league.type}
			</header>
			<hr />
			<table>
				<thead>
					<tr>
						<th>{trans("leagues.league.player")}</th>
						<th>{trans("leagues.league.victories")}</th>
						<th>{trans("leagues.league.losses")}</th>
						<th>{trans("leagues.league.percent")}</th>
					</tr>
				</thead>
				<tbody>
					{league.players &&
						league.players.map((player) => {
							return (
								<tr key={player.id}>
									<td>{player.name}</td>
									<td>{player.wins}</td>
									<td>{player.lost}</td>
									<td>{player.percentatge}%</td>
								</tr>
							);
						})}
					<tr></tr>
				</tbody>
			</table>
		</article>
	);
}
