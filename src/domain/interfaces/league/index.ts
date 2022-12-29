export interface LeagueInterface {
	id: string;
	name: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}

export interface LeagueServiceInterface {
	findAll(): Promise<LeagueInterface[]>;
}
