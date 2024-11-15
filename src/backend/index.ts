import { cookies } from "next/headers"
import { api } from "./baseURL"
import { parseCookies } from "nookies"
import router from "next/router"

export type RouteMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export type RouteResponse<T> = {
    data?: T
    success: boolean
    httpCode: string
}

export class Route<Req = {id?: string}, Res = {}> {
    path = ''
    method: RouteMethod = 'GET'
    upload: boolean = false

    constructor(options: Partial<Route<Req, Res>>) {
        Object.assign(this, options)
    }

    async request(req: Req): Promise<RouteResponse<Res>> {
        try {
            const routePath = process.env.NEXT_PUBLIC_API_URL + this.path
            const cookies = parseCookies(undefined)
            const vortexTokenPath = 'vortex.token'

            const { data } = await api.request<Res>({
                method: this.method,
                url: routePath,
                data: req,
                params: this.method !== 'POST' ? { id: (req as { id?: string }).id } : {},
                headers: this.upload ? {
                    Accept: 'multipart/form-data',
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${cookies[vortexTokenPath]}`
    
                } : {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies[vortexTokenPath]}`
                },
            })

            api.interceptors.response.use((response: any)=>response, (error:any)=>{

                if(error){
                    router.push('/')
                }
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