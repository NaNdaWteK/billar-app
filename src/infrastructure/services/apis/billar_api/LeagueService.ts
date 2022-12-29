import { config } from "../../../../config";
import { LeagueInterface, LeagueServiceInterface } from "../../../../domain/interfaces/league";
import { request } from "../Request";

export class LeagueService implements LeagueServiceInterface {
	async findAll(): Promise<LeagueInterface[]> {
		const url = `${config.billarApiUrl}/v1/league`;

		return await request.get(url);
	}
}
