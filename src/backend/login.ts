import { Route } from ".";

interface Cliente {
    id: number,
    name: string,
    created_at: Date
}

export const testeApi = new Route<{}, Cliente>({
    path: "/cliente",
    method: "GET",
})