'use client'
import { RegisterButton } from "@/app/global/styles/style";
import { ConnectionsContainer, ConnectionsHeader } from "./styles";
import { useState } from "react";
import { PaginatedItems } from "./components/connectionsPagination";
import ConnectionModalCreate from "./components/modalCreateConnection";


export default function Connections() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    
    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <ConnectionsContainer>
            <ConnectionsHeader>
                <h2>Conexões</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </ConnectionsHeader>

            <PaginatedItems itemsPerPage={9}/>

            {isOpenCreate && (
                <ConnectionModalCreate closeModal={handleOpenModalCreate} />
            )}

        </ConnectionsContainer>
    )
}