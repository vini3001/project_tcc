import { Route } from "."
import { Client } from "@/app/entities/Client"

export const routeEditClient = new Route<{
    email: string,
    password: string
}, {}>({
    path: "/cliente/edit",
    method: "POST",
})

export const routeListClient = new Route<{}, Client>({
    path: '/clientes',
    method: 'GET'
})

export const routeCreateClient = new Route<Client, {}>({
    path: '/cliente',
    method: 'POST'
})