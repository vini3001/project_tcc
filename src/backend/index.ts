import { api } from "./baseURL"

export type RouteMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export class Route<Req = {}, Res = {}> {
    path = ''
    method: RouteMethod = 'GET'

    constructor(options: Partial<Route<Req, Res>>) {
        Object.assign(this, options)
    }

    async request(req: Req) {
        const routePath = process.env.NEXT_PUBLIC_API_URL + this.path

        const response = await api.request<Res>({
            method: this.method,
            url: routePath,
            data: req,
            params: this.method === 'GET' ? req : {},
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        }).then((res) => {return res}).catch((err) => {console.log(err); throw err})

        return response
    }
}