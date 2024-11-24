import { Contact } from "@/app/entities/Contact"
import { Route } from "."

export const routeSendMessageBackend = new Route<{contato_id: number, mensagem: String}, {success: boolean, message: String}>({
    path: '/mensagens',
    method: 'POST'
})                        