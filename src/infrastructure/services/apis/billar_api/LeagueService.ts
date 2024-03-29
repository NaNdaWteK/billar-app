import { request } from '../../../../__core/request/Request';
import {
  LeagueInterface,
  LeagueServiceInterface,
} from '../../../../domain/interfaces/league';

export class LeagueService implements LeagueServiceInterface {
  constructor(private readonly billarApiUrl: string) {}

  async findAll(): Promise<LeagueInterface[]> {
    const url = `${this.billarApiUrl}/v1/league`;

    return await request.get(url);
  }

  async findById(id: string): Promise<LeagueInterface> {
    const url = `${this.billarApiUrl}/v1/league/${id}`;

    return await request.get(url);
  }

  async create(data: Partial<LeagueInterface>): Promise<LeagueInterface> {
    const url = `${this.billarApiUrl}/v1/league`;

    return await request.post(url, data);
  }
}
