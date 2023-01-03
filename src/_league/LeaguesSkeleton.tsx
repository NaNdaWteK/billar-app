/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "react-loading-skeleton/dist/skeleton.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { trans } from "../domain/translations";

function LeagueSkeleton() {
	return (
		<article className="league" style={{ height: "304px" }}>
			<header>
				<Skeleton inline={true} width="70%" />
			</header>
			<hr />
			<table style={{ paddingLeft: "1em" }}>
				<thead>
					<tr>
						<th>{trans("leagues.league.player")}</th>
						<th>{trans("leagues.league.victories")}</th>
						<th>{trans("leagues.league.losses")}</th>
						<th>{trans("leagues.league.percent")}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="40%" inline={true} />%
						</td>
					</tr>
					<tr>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="40%" inline={true} />%
						</td>
					</tr>
					<tr>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="40%" inline={true} />%
						</td>
					</tr>
					<tr>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="40%" inline={true} />%
						</td>
					</tr>
					<tr>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="80%" />
						</td>
						<td>
							<Skeleton width="40%" inline={true} />%
						</td>
					</tr>
				</tbody>
			</table>
		</article>
	);
}

export function LeaguesSkeleton({ count }: { count: number }) {
	return (
		<SkeletonTheme baseColor="#ece6b0" highlightColor="#d0ca90">
			{[...new Array(count)].map((_, i) => (
				<LeagueSkeleton key={i} />
			))}
		</SkeletonTheme>
	);
}
