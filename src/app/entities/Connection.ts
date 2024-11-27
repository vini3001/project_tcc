export type Connection = {
    instance: string
    token: string
}

export type ConnectionResponse = {
    success: boolean,
    data: {
        id: number,
        instance: string,
        data_reg: Date,
        token: string
    }[]
}