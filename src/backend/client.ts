import { Route } from "."
import { Client } from "@/app/entities/Client"

export const routeEditClient = new Route<Client, {}>({
    path: "/clientes",
    method: "PUT",
})

export const routeListClient = new Route<{}, Client[]>({
    path: '/clientes',
    method: 'GET'
})

export const routeGetClient = new Route<{id: number}, Client>({
    path: '/clientes',
    method: 'GET'
})

export const routeCreateClient = new Route<Client, {}>({
    path: '/clientes',
    method: 'POST'
})

export const routeDeleteClient = new Route<{id: number}, {}>({
    path: '/clientes',
    method: 'DELETE'
})