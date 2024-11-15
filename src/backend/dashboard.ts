import { DashboardInfo } from "@/app/entities/Dashboard";
import { Route } from ".";


export const routeGetDashboardInfo = new Route<{}, DashboardInfo>({
    path: '/dashboard',
    method: 'GET'
})