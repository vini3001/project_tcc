import { Tag } from "@/app/entities/Tag";
import { Route } from ".";

export const routeListTags = new Route<{}, Tag[]>({
    path: '/tags',
    method: 'GET'
})

export const routeCreateTag = new Route<{}, Tag>({
    path: '/tags',
    method: 'GET'
})