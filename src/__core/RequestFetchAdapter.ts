import { HTTPException } from './exceptions/HTTPException';

export class RequestFetchAdapter {
  async http<T>(path: string, config: object): Promise<T> {
    console.log(config);
    const response = await fetch(path, config);

    if (!response.ok) {
      throw new HTTPException(response.statusText, { status: response.status, url: response.url });
    }

    return response.json();
  }

  async get<T>(path: string, config = {}): Promise<T> {
    const options = { method: 'get', ...config };

    return await this.http<T>(path, options);
  }

  async post<T, U>(path: string, body: T, config = { mode: 'cors', headers: {'Content-Type': 'application/json'}}): Promise<U> {
    const options = { method: 'post', body: JSON.stringify(body), ...config };

    return await this.http<U>(path, options);
  }

  async put<T, U>(path: string, body: T, config = { mode: 'cors', headers: {'Content-Type': 'application/json'}}): Promise<U> {
    const options = { method: 'put', body: JSON.stringify(body), ...config };

    return await this.http<U>(path, options);
  }
}
