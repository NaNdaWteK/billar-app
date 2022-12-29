import { LeaguesDashboard } from "../_league/LeaguesDashboard";
import { LeagueService } from "../infrastructure/services/apis/billar_api/LeagueService";

const leagueService = new LeagueService();

export function Dashboard() {
	return (
		<>
			<LeaguesDashboard service={leagueService} />
		</>
	);
}
