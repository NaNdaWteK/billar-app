import "./league.css";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";
import { useBillarApiLeagues } from "./_useBillarApiLeagues";
import { League } from "./League";

export function LeaguesDashboard({ service }: { service: LeagueServiceInterface }) {
	const { leagues } = useBillarApiLeagues(service);

	return (
		<section id="leagues">
			{leagues.map((league: LeagueInterface) => {
				return <League key={league.id} league={league} />;
			})}
		</section>
	);
}
