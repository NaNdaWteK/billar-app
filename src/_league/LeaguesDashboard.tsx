import "./league.css";

import { useEffect } from "react";

import { useTitleContextProvider } from "../_layout/_TitleContextProvider";
import { LeagueInterface, LeagueServiceInterface } from "../domain/interfaces/league";
import { trans } from "../domain/translations";
import { useBillarApiLeagues } from "./_useBillarApiLeagues";
import { League } from "./League";
import { LeaguesSkeleton } from "./LeaguesSkeleton";

export function LeaguesDashboard({ service }: { service: LeagueServiceInterface }) {
	const { leagues, isLoading } = useBillarApiLeagues(service);
	const { changeTitle } = useTitleContextProvider();
	useEffect(() => {
		changeTitle(trans("leagues.title"));
	}, []);

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
					{leagues.map((league: LeagueInterface, index) => {
						return <League key={league.id} leagueIndex={index} league={league} />;
					})}
				</section>
			)}
		</>
	);
}
