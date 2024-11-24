import { Connection } from "@/app/entities/Connection";
import { Route } from ".";

export const routeListConnections = new Route<Connection, Connection[]>({
    path: '/instancias?nome_instance=tcc',
    method: 'GET'
})

export const routeConnectInstanceBackend = new Route<Connection, {}>({
    path: '/instancias',
    method: 'POST'
})