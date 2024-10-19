import axios from "axios";
import { apiWhatsapp } from "./baseURL";
import { RouteResponse, RouteWhatsapp } from "./index-whatsapp";
import { Instance, SendMessage } from "@/app/entities/Whatsapp";


export const routeConnectInstance = new RouteWhatsapp<{}, Instance>({
    path: '/instance/connect/vortexwhatsapp',
    method: 'GET'
})

export const routeSendMessage = new RouteWhatsapp<SendMessage, {}>({
    path: '/message/sendText/vortexwhatsapp',
    method: 'POST'
})