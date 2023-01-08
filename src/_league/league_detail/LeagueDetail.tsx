/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useTitleContextProvider } from '../../_layout/_TitleContextProvider';
import { LeagueServiceInterface } from '../../domain/interfaces/league';
import { trans } from '../../domain/translations';
import { useBillarApiLeague } from '../_useBillarApiLeague';
import { League } from '../league/League';

export function LeagueDetail({ service }: { service: LeagueServiceInterface }) {
  const { id } = useParams() as { id: string };
  const memoizedId = useMemo(() => id, [id]);

  const { league } = useBillarApiLeague(service, memoizedId);
  const { changeTitle } = useTitleContextProvider();
  useEffect(() => {
    changeTitle(`${league.name}`);
  }, [league, changeTitle]);

  return (
    <>
      {league ? (
        <League league={league} leagueIndex={0} />
      ) : (
        <span>{trans('league.detail.noleague')}</span>
      )}
    </>
  );
}
