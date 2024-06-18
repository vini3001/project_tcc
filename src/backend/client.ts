import { Route } from "."


export const routeEditClient = new Route<{
    email: string,
    password: string
}, {}>({
    path: "/cliente/edit/",
    method: "POST",
})