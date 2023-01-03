import "./league.css";

import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";
import { trans } from "../domain/translations";
import { useBillarApiLeagues } from "./_useBillarApiLeagues";
import { League } from "./League";
import { LeaguesSkeleton } from "./LeaguesSkeleton";

export function LeaguesDashboard({ service }: { service: LeagueServiceInterface }) {
	const { leagues, isLoading } = useBillarApiLeagues(service);

	return (
		<>
			{isLoading && (
				<section className="leagues">
					<LeaguesSkeleton count={6} />
				</section>
			)}
			{!isLoading && leagues.length === 0 ? (
				<div>
					<span>{trans("leagues.league.noleagues")}</span>
				</div>
			) : (
				<section className="leagues">
					{leagues.map((league: LeagueInterface) => {
						return <League key={league.id} league={league} />;
					})}
				</section>
			)}
		</>
	);
}
