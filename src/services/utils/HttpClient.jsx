import delay from "../../utils/delay";

class HttpClient {
  async get(url) {
    const response = await fetch(url);
    await delay(2000);

    return response.json();
  }
}

export default new HttpClient();
