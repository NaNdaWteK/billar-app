import { useEffect, useState } from "react";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";
import { dispatchPageLoaded } from "../events";

export function useBillarApiLeagues(service: LeagueServiceInterface): {
	leagues: LeagueInterface[];
	isLoading: boolean;
} {
	const [isLoading, setIsLoading] = useState(true);
	const [leagues, setLeagues] = useState<LeagueInterface[]>([]);

	useEffect(() => {
		setIsLoading(true);
		void service.findAll().then((response) => {
			setLeagues(response);
			setIsLoading(false);
			dispatchPageLoaded();
		});
	}, []);

	return { leagues, isLoading };
}
