'use client'

import React, { useState } from "react";
import { ContactCard, ContactContainer, ContactContent, ContactHeader } from "./styles";
import { PaginatedItems } from "./components/contactsPagination";


export default function Contacts() {

    return (
        <ContactContainer>
            <ContactHeader><h2>Contatos</h2></ContactHeader>
            <PaginatedItems itemsPerPage={9}/>
        </ContactContainer>
    )
}