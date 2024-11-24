'use client'
import { RegisterButton } from "@/app/global/styles/style";
import { ConnectionsContainer, ConnectionsHeader } from "./styles";
import { useState } from "react";
import { PaginatedItems } from "./components/connectionsPagination";
import { QrCode } from "./components/QRCode";


export default function Connections() {

    return (
        <ConnectionsContainer>
            <ConnectionsHeader>
                <h2>Conexões</h2>
            </ConnectionsHeader>

            <PaginatedItems itemsPerPage={9}/>

        </ConnectionsContainer>
    )
}