import { Tag } from "@/app/entities/Tag";
import { Route } from ".";

export const routeListTags = new Route<{}, Tag[]>({
    path: '/tags',
    method: 'GET'
})

export const routeCreateTag = new Route<Tag, Tag>({
    path: '/tags',
    method: 'POST'
})

export const routeEditTag = new Route<Tag, Tag>({
    path: '/tags',
    method: 'PUT'
})