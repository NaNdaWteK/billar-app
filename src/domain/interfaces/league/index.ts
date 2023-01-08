export interface PlayersForLeaguesInterface {
	name: string;
	wins: number;
	lost: number;
	percentatge: number;
	id: string;
	avatar?: string;
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
	create(data: Partial<LeagueInterface>): Promise<LeagueInterface>;
}
