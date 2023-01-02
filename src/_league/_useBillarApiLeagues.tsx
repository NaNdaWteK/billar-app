import { useEffect, useState } from "react";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";

export function useBillarApiLeagues(service: LeagueServiceInterface): {
	leagues: LeagueInterface[];
	isLoading: boolean;
} {
	const [isLoading, setIsLoading] = useState(true);
	const [leagues, setLeagues] = useState<LeagueInterface[]>([]);

	useEffect(() => {
		setIsLoading(true);
		void service.findAll().then((response) => {
			// setTimeout(() => {
			setLeagues(response);
			setIsLoading(false);
			// }, 10000);
		});
	}, [service]);

	return { leagues, isLoading };
}
