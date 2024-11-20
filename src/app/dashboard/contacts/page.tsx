'use client'

import React, { useState } from "react";
import { ContactContainer, ContactContent, ContactHeader } from "./styles";
import { PaginatedItems } from "./components/contactsPagination";
import { RegisterButton } from "@/app/global/styles/style";
import { ContactModal } from "./components/modalCreateContact";


export default function Contacts() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <ContactContainer>
            <ContactHeader>
                <h2>Contatos</h2>
            </ContactHeader>
            <PaginatedItems itemsPerPage={9}/>
            {isOpenCreate && <ContactModal closeModal={handleOpenModalCreate} />}
        </ContactContainer>
    )
}