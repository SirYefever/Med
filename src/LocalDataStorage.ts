interface LoginApiResponse {
  token: string;
}

class LocalDataStorage {
    private _data?: LoginApiResponse;

    public get data(): LoginApiResponse{
        if (window.localStorage.getItem('data') === null) {
            console.error("Local storage returned null");
        }
        return JSON.parse(window.localStorage.getItem('data')!);
    }

    public set data(value: object) {
        window.localStorage.setItem('data', JSON.stringify(value));
    }

    public getToken() {
        return this.data.token;
    }
}

export { LocalDataStorage };
export type { LoginApiResponse };
