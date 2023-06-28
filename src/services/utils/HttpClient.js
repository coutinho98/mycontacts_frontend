import delay from "../../utils/delay";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get("Content-Type");
    if (contentType.includes("application/json")) {
      body = await response.json();
    }

    if (response.ok) {
      await delay(2000);
      return body;
    }

    console.log(body);

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }

  async post(path, body) {
    await delay(2000);

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get("Content-Type");
    if (contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    console.log(responseBody);

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }
}

export default HttpClient;
