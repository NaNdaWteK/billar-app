import { LeaguesDashboard } from "../_league/LeaguesDashboard";
import { config } from "../config";
import { LeagueService } from "../infrastructure/services/apis/billar_api/LeagueService";

const leagueService = new LeagueService(config.billarApiUrl);

export function Dashboard() {
	return (
		<>
			<LeaguesDashboard service={leagueService} />
		</>
	);
}
