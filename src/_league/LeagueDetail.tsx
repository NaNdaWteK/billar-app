import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { LeagueServiceInterface } from "../domain/interfaces/league";
import { useBillarApiLeague } from "./_useBillarApiLeague";
import { League } from "./League";

export function LeagueDetail({ service }: { service: LeagueServiceInterface }) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	const { id } = useParams() as { id: string };
	const memoizedId = useMemo(() => id, [id]);

	const { league } = useBillarApiLeague(service, memoizedId);

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	return <>{league ? <League league={league} /> : <span>No League</span>}</>;
}
