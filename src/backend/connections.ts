import { Connection } from "@/app/entities/Connection";
import { Route } from ".";

export const routeListConnections = new Route<Connection, Connection[]>({
    path: '/instancias',
    method: 'POST'
})