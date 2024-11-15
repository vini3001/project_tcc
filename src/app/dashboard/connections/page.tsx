'use client'
import { RegisterButton } from "@/app/global/styles/style";
import { ConnectionsContainer, ConnectionsHeader } from "./styles";
import { useState } from "react";
import { PaginatedItems } from "./components/connectionsPagination";
import { QrCode } from "./components/QRCode";


export default function Connections() {
    const [isOpenConnect, setIsOpenConnect] = useState(false)
    
    function handleOpenModalConnect(){
        setIsOpenConnect(!isOpenConnect)
    }

    return (
        <ConnectionsContainer>
            <ConnectionsHeader>
                <h2>Conexões</h2>
                <RegisterButton onClick={handleOpenModalConnect}>+</RegisterButton>
            </ConnectionsHeader>

            <PaginatedItems itemsPerPage={9}/>

            {isOpenConnect && (
                <QrCode closeModal={handleOpenModalConnect} />
            )}

        </ConnectionsContainer>
    )
}