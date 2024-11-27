import { Contact } from "@/app/entities/Contact"
import { Route } from "."
import { TagResponse } from "@/app/entities/Tag"

export const routeSendMessageBackend = new Route<{contato_id: number, mensagem: String}, {success: boolean, message: String}>({
    path: '/mensagens',
    method: 'POST'
})        

export const routeSendMessageBackendByTag = new Route<{tag_id: number, mensagem: String}, {success: boolean, message: String}>({
    path: '/mensagens',
    method: 'POST'
})    

export const routeGetMessagesByTag = new Route<{id: number}, TagResponse[]>({
    path: '/mensagens',
    method: 'GET'
})             