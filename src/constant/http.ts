type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

class InstantsApi {
    private headers = {
        "Content-Type": "application/json",
        credentials: "include",
    };
    constructor(private url: string) {}

    /**
     *  Thêm params vào url
     * @param path path của url
     * @param params object chứa các params
     */
    private buildUrl(path?: string, params?: Record<string, any>) {
        if (!path) return this.url;
        if (!params) return this.url + path;
        const newUrl = this.url + path;

        const searchParams = new URLSearchParams(params);
        return `${newUrl}?${searchParams.toString()}`;
    }

    /**
     * Thiết lặp url cho api
     * @param url url của api
     */
    public setUrl(url: string) {
        this.url = url;
        return this;
    }

    /**
     * Sử dụng local server nextjs
     */
    public localServer() {
        this.url = "/api";
        return this;
    }

    /**
     * Thêm headers cho api
     * @param params object chứa các headers
     * @example
     * ```ts
     * API.setHeaders({
     *  Authorization
     * })
     * ```
     */
    public setHeaders(params: Record<string, any>) {
        this.headers = {
            ...this.headers,
            ...params,
        };
        return this;
    }

    private async request(method: Method, path: string, body?: any) {
        if (body instanceof FormData) {
            this.headers = {
                ...this.headers,
                "Content-Type": "multipart/form-data",
            };
        }
        const option: RequestInit = {
            method,
            headers: this.headers,
            body: body instanceof FormData ? body : JSON.stringify(body),
            next: {
                revalidate: 60,
            },
        };

        return new Promise((resolve, reject) => {
            fetch(path, option)
                .then(async response => {
                    const data = await response.json();
                    if (response.ok) {
                        return resolve(data);
                    }
                    throw data;
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    public async get<T>(
        path?: string,
        params?: Record<string, any>
    ): Promise<T | any> {
        return this.request("GET", this.buildUrl(path, params));
    }

    public async post(
        path: string,
        body: Record<string, any>,
        params?: Record<string, any>
    ): Promise<any> {
        return this.request("POST", this.buildUrl(path, params), body);
    }

    public async put(
        path: string,
        body: Record<string, any>,
        params?: Record<string, any>
    ): Promise<any> {
        return this.request("PUT", this.buildUrl(path, params), body);
    }

    public async delete(
        path: string,
        params?: Record<string, any>
    ): Promise<any> {
        return this.request("DELETE", this.buildUrl(path, params));
    }

    public async patch(
        path: string,
        body: Record<string, any>,
        params?: Record<string, any>
    ): Promise<any> {
        return this.request("PATCH", this.buildUrl(path, params), body);
    }
}

const baseURL = process.env.API_URL || "";

export const API = new InstantsApi(baseURL);
export const API_DETAIL = new InstantsApi(baseURL);
