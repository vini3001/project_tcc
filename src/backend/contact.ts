import { Contact } from "@/app/entities/Contact"
import { Route } from "."
import { Client } from "@/app/entities/Client"

export const routeListContacts = new Route<{}, Contact[]>({
    path: '/contacts',
    method: 'GET'
})