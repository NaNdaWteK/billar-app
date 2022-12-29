import { useEffect, useState } from "react";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";
import { League } from "./League";

export function LeaguesDashboard({ service }: { service: LeagueServiceInterface }) {
	const [leagues, setLeagues] = useState<LeagueInterface[]>([]);
	useEffect(() => {
		void service.findAll().then((response) => {
			setLeagues(response);
		});
	}, [service]);

	return (
		<>
			{leagues.map((league: LeagueInterface) => {
				return <League key={league.id} league={league} />;
			})}
		</>
	);
}
