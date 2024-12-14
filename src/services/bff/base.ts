export const baseUrl = `${process.env.MODERN_PUBLIC_BFF_API}/public/api/v1/rental-b2c`;

export default class BaseApi {
  url = baseUrl;

  get(url: string, params = "", init?: Partial<RequestInit>) {
    return fetch(`${this.url}${url}${params.length > 0 ? `?${params}` : ""}`, {
      method: "GET",
      ...(init ?? {}),
    });
  }

  post(url: string, data: any, params = "", init?: Partial<RequestInit>) {
    return fetch(`${this.url}${url}${params.length > 0 ? `?${params}` : ""}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
      ...(init ?? {}),
    });
  }
}
