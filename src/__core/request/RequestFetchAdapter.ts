import { HTTPException } from '../exceptions/HTTPException';

interface RequestInterface {
  http<T>(path: string, config: object): Promise<T>;
  get<T>(path: string, config: object): Promise<T>;
  post<T, U>(path: string, body: T, config: object): Promise<U>;
  put<T, U>(path: string, body: T, config: object): Promise<U>;
}

export class RequestFetchAdapter implements RequestInterface {
  async http<T>(path: string, config: object): Promise<T> {
    config = {
      ...config,
      ...{ mode: 'cors', headers: { 'Content-Type': 'application/json' } },
    };
    const response = await fetch(path, config);

    if (!response.ok) {
      return response.json().then((error) => {
        throw new HTTPException(error.message, error.errors);
      });
    }

    return response.json();
  }

  async get<T>(path: string, config = {}): Promise<T> {
    const options = { method: 'get', ...config };

    return await this.http<T>(path, options);
  }

  async post<T, U>(path: string, body: T, config = {}): Promise<U> {
    const options = { method: 'post', body: JSON.stringify(body), ...config };

    return await this.http<U>(path, options);
  }

  async put<T, U>(path: string, body: T, config = {}): Promise<U> {
    const options = { method: 'put', body: JSON.stringify(body), ...config };

    return await this.http<U>(path, options);
  }
}
