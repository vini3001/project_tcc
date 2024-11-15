export type DashboardInfo = {
    qtdContatos: number,
    qtdMensagens: number,
    tagsComContagem: [
        {
        tag: string,
        qtd_contatos: number
        }
    ]
}