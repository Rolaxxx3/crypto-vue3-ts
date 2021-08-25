export class BaseService {
  protected _httpClient;

  constructor(httpClient: unknown) {
    this._httpClient = httpClient
  }
}