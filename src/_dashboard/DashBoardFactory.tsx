import { config } from "../config";
import { LeagueService } from "../infrastructure/services/apis/billar_api/LeagueService";
import { Dashboard } from "./Dashboard";

const leagueService = new LeagueService(config.billarApiUrl);

export class DashboardFactory {
	static create(): React.ReactElement {
		return <Dashboard leagueService={leagueService} />;
	}
}
