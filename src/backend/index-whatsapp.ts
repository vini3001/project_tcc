import { api } from "./baseURL"

export type RouteMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export type RouteResponse<T> = {
    data?: T
    success: boolean
    httpCode: string
}

export class RouteWhatsapp<Req = {}, Res = {}> {
    path = ''
    method: RouteMethod = 'GET'
    upload: boolean = false
    param: {} = {}

    constructor(options: Partial<RouteWhatsapp<Req, Res>>) {
        Object.assign(this, options)
    }

    async request(req: Req): Promise<RouteResponse<Res>> {
        try {
            const routePath = process.env.NEXT_PUBLIC_WHATSAPP_URL + this.path

            const { data } = await api.request<Res>({
                method: this.method,
                url: routePath,
                data: req,
                params: Object.keys(this.param).length !== 0 && this.param,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    apiKey: `ST6vgy3KFQTdXAefmOWCfQCZR6LDPpLx`
                },
            })

            console.log('Request succeed with status code 200')

            return {
                success: true,
                data: data,
                httpCode: '200'
            }
        } catch(err) {
            console.log('Request failed with status code 500')

            return {
                success: false,
                data: undefined,
                httpCode: '500'
            }
        }
    }
}