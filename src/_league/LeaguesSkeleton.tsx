/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "react-loading-skeleton/dist/skeleton.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function LeagueSkeleton() {
	return (
		<article className="league">
			<header>
				<Skeleton inline={true} width="70%" />
			</header>
			<hr />
			<p style={{ height: "230px", paddingLeft: "1em" }}>
				<Skeleton width="70%" style={{ marginBottom: "1em" }} />
				<Skeleton width="60%" style={{ marginBottom: "1em" }} />
				<Skeleton width="50%" style={{ marginBottom: "1em" }} />
				<Skeleton width="70%" style={{ marginBottom: "1em" }} />
				<Skeleton width="50%" style={{ marginBottom: "1em" }} />
				<Skeleton width="50%" style={{ marginBottom: "1em" }} />
				<Skeleton width="70%" style={{ marginBottom: "1em" }} />
			</p>
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
