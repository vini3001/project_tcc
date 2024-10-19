import { Contact } from "@/app/entities/Contact"
import { Route } from "."
import { Client } from "@/app/entities/Client"

export const routeListContacts = new Route<{}, Contact[]>({
    path: '/contatos',
    method: 'GET'
})

export const routeEditContact = new Route<{}, Contact>({
    path: '/contatos',
    method: 'PUT'
})