// import { request } from "../../../../__core/Request";
import { LeagueInterface, LeagueServiceInterface } from "../../../../domain/interfaces/league";
import { leagues } from "./mocks";

export class LeagueService implements LeagueServiceInterface {
	constructor(private readonly billarApiUrl: string) {}

	async findAll(): Promise<LeagueInterface[]> {
		const url = `${this.billarApiUrl}/v1/league`;

		// eslint-disable-next-line @typescript-eslint/await-thenable
		return await leagues; // await request.get(url);
	}

	async findById(id: string): Promise<LeagueInterface> {
		const url = `${this.billarApiUrl}/v1/league/${id}`;

		// eslint-disable-next-line @typescript-eslint/await-thenable
		return await leagues[1]; // await request.get(url);
	}
}
