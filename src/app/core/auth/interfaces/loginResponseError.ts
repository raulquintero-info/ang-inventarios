export interface LoginResponseError {
    status: number;
    statusText: string;
    url: string;
    ok: boolean,
    name: string;
    message: string; //"Http failure response for http://localhost:8080/api/auth/login: 401 OK",
    error: string | null;
}
