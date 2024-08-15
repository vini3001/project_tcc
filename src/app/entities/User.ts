export type User = {
    id: number
    nome: string
    email: string
    tipo: string
    nivel: string
    password: string
    status: number
    id_cliente: number
    id_by: number
    data_nascimento: Date
    data_registro?: Date
    data_alteracao?: Date
}