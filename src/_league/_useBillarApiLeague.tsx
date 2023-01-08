import { useEffect, useState } from 'react';

import { LeagueInterface, LeagueServiceInterface } from '../domain/interfaces/league';
import { dispatchPageLoaded } from '../events';

export function useBillarApiLeague(
  service: LeagueServiceInterface,
  id: string
): {
	league: LeagueInterface;
} {
  const [league, setLeague] = useState<LeagueInterface>({} as LeagueInterface);
  useEffect(() => {
    service.findById(id).then((response) => {
      setLeague(response);
      dispatchPageLoaded();
    });
  }, [service, id]);

  return { league };
}
