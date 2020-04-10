import axios, { AxiosInstance, AxiosResponse } from "axios";

class Http {
  protected readonly http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: "http://www.walk-in-starrysky.com/star.do",
      headers: {
        "Content-Type": "text/xml",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
  }

  async fetchStars(): Promise<AxiosResponse> {
    return await this.http.get("", {
      params: {
        cmd: "display",
      },
    });
  }

  async fetchStarByhHrNo(id: number): Promise<AxiosResponse> {
    return await this.http.get("", {
      params: {
        cmd: "detail",
        hrNo: id,
      },
    });
  }
}

export default new Http();
