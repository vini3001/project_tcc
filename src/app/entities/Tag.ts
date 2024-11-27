export type Tag = {
    id: number,
    tag: string
}

export type TagResponse = {
    id: number,
    contato_id: number,
    id_tag: number,
    mensagem: string,
    data_disparo: Date
}