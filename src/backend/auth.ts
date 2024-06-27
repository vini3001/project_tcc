import { User } from "@/app/entities/User";
import { Route } from ".";
import { LoginResponse, RegisterRequestData } from "@/app/entities/Auth";

export const routeLogin = new Route<{
    email: string,
    password: string
}, LoginResponse>({
    path: "/cliente/login",
    method: "POST",
})

export const routeRegister = new Route<RegisterRequestData, {user: User}>({
    path: "/cliente",
    method: "POST"
})