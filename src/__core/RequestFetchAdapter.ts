import { HTTPException } from "./exceptions/HTTPException";

/* eslint-disable @typescript-eslint/no-unsafe-return */
export class RequestFetchAdapter {
	async http<T>(path: string, config: RequestInit): Promise<T> {
		const request = new Request(path, config);
		const response = await fetch(request);

		if (!response.ok) {
			throw new HTTPException(response.statusText, { status: response.status, url: response.url });
		}

		return response.json();
	}

	async get<T>(path: string, config?: RequestInit): Promise<T> {
		const init = { method: "get", ...config };

		return await this.http<T>(path, init);
	}

	async post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
		const init = { method: "post", body: JSON.stringify(body), ...config };

		return await this.http<U>(path, init);
	}

	async put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
		const init = { method: "put", body: JSON.stringify(body), ...config };

		return await this.http<U>(path, init);
	}
}
