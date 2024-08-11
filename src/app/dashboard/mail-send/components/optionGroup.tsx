import { ModalGroupContainer, ModalGroupContent, ModalGroupSurrounding } from "./style";


export default function OptionGroup() {
    return (
        <ModalGroupContainer>
            <ModalGroupSurrounding>
                <ModalGroupContent>
                    <a>Adicionar contato a um novo grupo</a>
                </ModalGroupContent>
                <ModalGroupContent>
                    <a>Adicionar contato a um grupo existente</a>
                </ModalGroupContent>
            </ModalGroupSurrounding>
        </ModalGroupContainer>
    )
}