import { BaseService } from "@/api/services/base.service";
import { CoinsResponseType, CoinsRequestType } from "@/ts/types/api/coins.types";
import { AxiosResponse } from "axios";

class CoinsService extends BaseService {
  private _perPage = 12;

  constructor(httpClient: unknown) {
    super(httpClient);
  }

  public getCoins(payload: CoinsRequestType):AxiosResponse<CoinsResponseType> {
    return this._httpClient.get('coins', {
      params: {
        skip: (payload.page - 1) * this._perPage,
        limit: this._perPage,
      },
    })
  }
}

export default CoinsService
