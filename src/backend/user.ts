import { User } from "@/app/entities/User"
import { Route } from "."


export const routeCreateUser = new Route<User, {}>({
    path: "/usuarios",
    method: "POST"
})

export const routeListUser = new Route<{}, User[]>({
    path: "/usuarios",
    method: 'GET'
})

export const routeDeleteUser = new Route<{id: string}, {}>({
    path: '/usuarios',
    method: 'DELETE'
})

export const routeEditUser = new Route<User, {}>({
    path: '/usuarios',
    method: 'PUT'
})