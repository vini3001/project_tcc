import { RouteWhatsapp } from "./index-whatsapp";
import { GetGroupParticipants, GetGroupsResponse, Instance, SendMessagePayload, SendMessageResponse } from "@/app/entities/Whatsapp";


export const routeConnectInstance = new RouteWhatsapp<{}, Instance>({
    path: '/instance/connect/tcc',
    method: 'GET'
})

export const routeSendMessage = new RouteWhatsapp<SendMessagePayload, {}>({
    path: '/message/sendText/tcc',
    method: 'POST'
})

export const routeGetMessages = new RouteWhatsapp<{}, SendMessageResponse[]>({
    path: '/chat/findMessages/tcc',
    method: 'POST'
})

export const routeListGroups = new RouteWhatsapp<{}, GetGroupsResponse[]>({
    path: '/group/fetchAllGroups/tcc?getParticipants=false',
    method: 'GET'
})

export const routeListParticipants = new RouteWhatsapp<{},GetGroupParticipants[]>({
    path: '/group/participants/tcc',
    method: 'GET',
})