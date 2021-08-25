import axios from "axios";
import CoinsService from "@/api/services/coins.service";
import config from "root/config";

class ApiCaller {
  public coinService;

  constructor() {
    const instance = axios.create({
      baseURL: config.apiBaseUrl,
    });
    instance.defaults.headers.common = {
      'Content-Type': 'application/json',
    }
    this.coinService = new CoinsService(instance);
  }
}

const api = new ApiCaller()

export default api;
