export class HTTPException extends Error {
  public readonly data;
  constructor(message: string, data = {}) {
    super(message);
    this.data = data;
  }
}
