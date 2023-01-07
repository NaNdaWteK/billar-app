import { config } from "../../config";
import { LeagueService } from "../../infrastructure/services/apis/billar_api/LeagueService";
import { LeaguesDashboard } from "./LeaguesDashboard";

const leagueService = new LeagueService(config.billarApiUrl);

export class LeaguesDashboardFactory {
	static create(): React.ReactElement {
		return <LeaguesDashboard service={leagueService} />;
	}
}
