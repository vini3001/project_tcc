import { HeaderText, RegisterBox, RegisterButton, RegisterForm } from "@/app/global/styles/style";
import { CloseButtonTag, ModalGroupContainer, ModalGroupContent, ModalGroupSurrounding, TagGroupForm } from "./style";
import { useState } from "react";
import { useQuery } from "react-query";
import { routeListTags } from "@/backend/tag";
import closeButton from '../../../assets/svg/closeButton.svg'
import { Loading } from "@/app/components/Loading";
import { Contact } from "@/app/entities/Contact";
import { routeEditContact } from "@/backend/contact";
import { Tag } from "@/app/entities/Tag";
import { toastError, toastSuccess } from "@/utils/toastify";

interface addTagProps {
    openModal: () => void
}

export default function AddTag({openModal}: addTagProps) {

    function handleCloseModal() {
        openModal()
    }

    return (
        <ModalGroupContainer>
            <ModalGroupSurrounding>
                <ModalGroupContent onClick={handleCloseModal}>
                    <a>Adicionar contato a uma tag</a>
                </ModalGroupContent>
            </ModalGroupSurrounding>
        </ModalGroupContainer>
    )
}

interface tagsProps {
    contact: Contact | undefined
    closeModal: () => void
}

export function ListTags({closeModal, contact}: tagsProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [tags, setTags] = useState<Tag[]>()

    useQuery({
    queryKey: 'tagList',
    queryFn: async () => {
        setIsLoading(true)

        await routeListTags.request({}).then((tags) => {
            if(tags.data !== undefined) {
                setTags(tags.data)
                setIsLoading(false)
            } else {
                toastError('Sem tags carregadas!')
                closeModal()
            }
        })
    },
    refetchOnWindowFocus:false
    })

    function handleAddToTag(idTag: number) {
        routeEditContact.request({
            id: contact!.id,
            id_cliente: contact!.id_cliente,
            nome: contact!.nome,
            tags: [idTag],
            celular: contact!.celular,
            email: contact!.email,
            data_registro: contact!.data_registro
        }).then(() => {
            toastSuccess('Tag adicionada com sucesso!')
        }).catch(() => {
            toastError('Erro ao salvar tag!')
        })
    }

    function handleCloseModal() {
        closeModal()
    }

     return (
        <RegisterBox>
            {!isLoading ? 
            <div className="flex flex-col relative items-end">
                <CloseButtonTag className="relative" onClick={handleCloseModal} src={closeButton.src} />
                <TagGroupForm className="max-h-[50vh] overflow-auto">
                {tags!.map((item) => {
                    return (
                        <>
                            <div>
                                <HeaderText>{item.tag}</HeaderText>
                            </div>
                            <div className="w-full items-center">
                                <RegisterButton className="w-fit" onClick={() => {handleAddToTag(item.id)} }>+</RegisterButton>
                            </div>
                            <hr />
                        </>
                    )
                })}
                </TagGroupForm>
            </div>
            : <Loading isLoading={true} />}
        </RegisterBox>
     )
}