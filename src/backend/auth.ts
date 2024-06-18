import { User } from "@/app/entities/User";
import { Route } from ".";
import { LoginRequestData, RegisterRequestData } from "@/app/entities/Auth";

export const routeLogin = new Route<{
    email: string,
    password: string
}, {}>({
    path: "/cliente/login",
    method: "POST",
})

export const routeRegister = new Route<RegisterRequestData, {user: User}>({
    path: "/cliente",
    method: "POST"
})