export interface PlayersForLeaguesInterface {
	name: string;
	wins: number;
	lost: number;
	percentatge: number;
	id: string;
}

export interface LeagueInterface {
	id: string;
	name: string;
	type: string;
	players: PlayersForLeaguesInterface[];
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}

export interface LeagueServiceInterface {
	findAll(): Promise<LeagueInterface[]>;
	findById(id: string): Promise<LeagueInterface>;
}
