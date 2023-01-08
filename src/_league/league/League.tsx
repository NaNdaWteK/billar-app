/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { LeagueInterface } from '../../domain/interfaces/league';
import { trans } from '../../domain/translations';
import { useSetAvatar } from '../_useSetAvatar';

export function League({
  league,
  leagueIndex,
}: {
  league: LeagueInterface;
  leagueIndex: number;
}) {
  const avatar = league.players?.length ? league.players[0].avatar : '';
  useSetAvatar(leagueIndex, avatar as string);

  return (
    <article className="league">
      <header>
        {league.name} - {league.type}
      </header>
      <hr />
      <table>
        <thead>
          <tr>
            <th>{trans('leagues.league.player')}</th>
            <th>{trans('leagues.league.victories')}</th>
            <th>{trans('leagues.league.losses')}</th>
            <th>{trans('leagues.league.percent')}</th>
          </tr>
        </thead>
        <tbody>
          {league.players &&
            league.players.map((player) => {
              return (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.wins}</td>
                  <td>{player.lost}</td>
                  <td>{player.percentatge}%</td>
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </table>
    </article>
  );
}
