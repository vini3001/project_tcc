export type Contact = {
    id: number,
    id_cliente: number,
    nome: string,
    tags: string[],
    celular: string,
    email: string,
    data_registro: string
}

export type ContactRequest = {
    id: number,
    id_cliente: number,
    nome: string,
    tags: number[],
    celular: string,
    email: string,
    data_registro: string
}