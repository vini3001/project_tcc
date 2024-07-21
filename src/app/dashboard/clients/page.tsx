'use client'

import { useState } from "react"
import ClientModalCreate from "./components/modalCreateCli"
import { ClientContainer, ClientHeader } from "./styles"
import { RegisterButton } from "@/app/global/styles/style"
import { PaginatedItems } from "./components/clientsPagination"

export default function Clients() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <ClientContainer>
            <ClientHeader>
                <h2>Clientes</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </ClientHeader>

            <PaginatedItems itemsPerPage={9}/>

            {isOpenCreate && (
                <ClientModalCreate closeModal={handleOpenModalCreate} />
            )}

        </ClientContainer>
    )
}