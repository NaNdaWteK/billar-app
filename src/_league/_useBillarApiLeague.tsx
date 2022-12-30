import { useEffect, useState } from "react";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";

export function useBillarApiLeague(
	service: LeagueServiceInterface,
	id: string
): {
	league: LeagueInterface;
} {
	const [league, setLeague] = useState<LeagueInterface>({} as LeagueInterface);
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		void service.findById(id).then((response) => {
			setLeague(response);
		});
	}, [service, id]);

	return { league };
}
