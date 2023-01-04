/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { LeagueServiceInterface } from "../domain/interfaces/league";
import { trans } from "../domain/translations";
import { useBillarApiLeague } from "./_useBillarApiLeague";
import { League } from "./League";

export function LeagueDetail({ service }: { service: LeagueServiceInterface }) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	const { id } = useParams() as { id: string };
	const memoizedId = useMemo(() => id, [id]);

	const { league } = useBillarApiLeague(service, memoizedId);

	return (
		<>
			{league ? (
				<League league={league} leagueIndex={0} />
			) : (
				<span>{trans("league.detail.noleague")}</span>
			)}
		</>
	);
}
