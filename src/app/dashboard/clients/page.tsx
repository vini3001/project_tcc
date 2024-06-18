'use client'

import { useState } from "react"
import ClientModalCreate from "./components/modalCreate"
import ClientModalEdit from "./components/modalEdit"
import { ClientContainer, ClientHeader, EditIcon, Table } from "./styles"
import { RegisterButton } from "@/app/global/styles/style"
import editIcon from '../../assets/svg/icons/edit.svg'

export default function Clients() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    function handleOpenModalEdit() {
        setIsOpenEdit(!isOpenEdit)
    }

    return (
        <ClientContainer>
            <ClientHeader>
                <h2>Cadastro de clientes</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </ClientHeader>

            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Documento</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Tipo de pessoa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>meu pinto</td>
                        <td>4455883233423423423</td>
                        <td>234235232342342342355</td>
                        <td>2342354234234233235</td>
                        <td>234235235</td>
                        <td><EditIcon onClick={handleOpenModalEdit} src={editIcon.src} /></td>
                    </tr>
                </tbody>
            </Table>

            {isOpenCreate && (
                <ClientModalCreate closeModal={handleOpenModalCreate} />
            )}

            {isOpenEdit && (
                <ClientModalEdit closeModal={handleOpenModalEdit} />
            )}
        </ClientContainer>
    )
}