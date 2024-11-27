import { Connection, ConnectionResponse } from "@/app/entities/Connection";
import { Route } from ".";

export const routeListConnections = new Route<Connection, ConnectionResponse>({
    path: '/instancias',
    method: 'GET'
})

export const routeConnectInstanceBackend = new Route<Connection, {}>({
    path: '/instancias',
    method: 'POST'
})