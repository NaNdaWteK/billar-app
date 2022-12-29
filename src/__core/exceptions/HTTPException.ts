export class HTTPException extends Error {
	public readonly data;
	constructor(message: string, data: unknown) {
		super(message);
		this.data = data;
	}
}
