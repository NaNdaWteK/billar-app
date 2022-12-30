import { useEffect, useState } from "react";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";

export function useBillarApiLeagues(service: LeagueServiceInterface): {
	leagues: LeagueInterface[];
} {
	const [leagues, setLeagues] = useState<LeagueInterface[]>([]);
	useEffect(() => {
		void service.findAll().then((response) => {
			setLeagues(response);
		});
	}, [service]);

	return { leagues };
}
