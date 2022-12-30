import { LeaguesDashboard } from "../_league/LeaguesDashboard";
import { LeagueServiceInterface } from "../domain/interfaces/league";

export function Dashboard({ leagueService }: { leagueService: LeagueServiceInterface }) {
	return (
		<>
			<LeaguesDashboard service={leagueService} />
		</>
	);
}
