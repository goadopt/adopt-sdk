import fetch from "isomorphic-unfetch";

type Config = {
  disclaimerId: string;
  baseUrl?: string;
};

export abstract class Base {
  protected disclaimerId: string;
  private baseUrl: string;
  constructor(config: Config) {
    this.disclaimerId = config.disclaimerId;
    this.baseUrl = config.baseUrl || "https://disclaimer-api.goadopt.io/api";
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
