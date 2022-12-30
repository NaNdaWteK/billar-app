import { config } from "../config";
import { LeagueService } from "../infrastructure/services/apis/billar_api/LeagueService";
import { LeagueDetail } from "./LeagueDetail";

const leagueService = new LeagueService(config.billarApiUrl);

export class LeaguesDetailFactory {
	static create(): React.ReactElement {
		return <LeagueDetail service={leagueService} />;
	}
}
