export interface LoginRequestData {
    email: string
    password: string
}

export type RecoverPasswordRequestData = {
    password: string
    email: string
}

export interface RegisterRequestData {
    name: string
    email: string
    personType: "física" | "jurídica"
    phone: string
    document: string
    cep: string
    logradouro: string
    number: string
    complement: string
    neighborhood: string
    city: string
    uf: string
}