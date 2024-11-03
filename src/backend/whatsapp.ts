import { RouteWhatsapp } from "./index-whatsapp";
import { GetGroupParticipants, GetGroupsResponse, Instance, SendMessagePayload, SendMessageResponse } from "@/app/entities/Whatsapp";


export const routeConnectInstance = new RouteWhatsapp<{}, Instance>({
    path: '/instance/connect/Lucass',
    method: 'GET'
})

export const routeSendMessage = new RouteWhatsapp<SendMessagePayload, {}>({
    path: '/message/sendText/Lucass',
    method: 'POST'
})

export const routeGetMessages = new RouteWhatsapp<{}, SendMessageResponse[]>({
    path: '/chat/findMessages/Lucass',
    method: 'POST'
})

export const routeListGroups = new RouteWhatsapp<{}, GetGroupsResponse[]>({
    path: '/group/fetchAllGroups/Lucass?getParticipants=false',
    method: 'GET'
})

export const routeListParticipants = new RouteWhatsapp<{},GetGroupParticipants[]>({
    path: '/group/participants/Lucass',
    method: 'GET',
})