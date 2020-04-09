import axios, { AxiosInstance } from "axios";

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

  async fetchStars(): Promise<void> {
    this.http
      .get("", {
        params: {
          cmd: "display",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  async fetchStarByhHrNo(): Promise<void> {
    this.http
      .get("", {
        params: {
          cmd: "detail",
          hrNo: 1,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}

export default new Http();
