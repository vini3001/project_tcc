import { User } from "@/app/entities/User"
import { Route } from "."


export const routeCreateUser = new Route<User, {}>({
    path: "/usuarios",
    method: "POST",
})