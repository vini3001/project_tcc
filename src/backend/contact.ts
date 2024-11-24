import { Contact, ContactRequest } from "@/app/entities/Contact"
import { Route } from "."

export const routeListContacts = new Route<{}, Contact[]>({
    path: '/contatos',
    method: 'GET'
})

export const routeEditContact = new Route<ContactRequest, Contact>({
    path: '/contatos',
    method: 'PUT'
})

export const routeDeleteContact = new Route<{id: number}, {}>({
    path: '/contatos',
    method: 'DELETE'
})