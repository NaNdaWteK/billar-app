import { request } from '../../../../__core/Request';
import { LeagueInterface, LeagueServiceInterface } from '../../../../domain/interfaces/league';
import { leagues } from './mocks';

export class LeagueService implements LeagueServiceInterface {
  constructor(private readonly billarApiUrl: string) {}

  async findAll(): Promise<LeagueInterface[]> {
    const url = `${this.billarApiUrl}/v1/league`;

    return await leagues; // await request.get(url);
  }

  async findById(id: string): Promise<LeagueInterface> {
    const url = `${this.billarApiUrl}/v1/league/${id}`;

    return await leagues[1]; // await request.get(url);
  }

  async create(data: Partial<LeagueInterface>): Promise<LeagueInterface> {
    const url = `${this.billarApiUrl}/v1/league`;

    return await await request.post(url, data);
  }
}
