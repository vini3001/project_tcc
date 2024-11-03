'use client'

import { useState } from "react";
import { PaginatedItems } from "./components/tagsPagination";
import { RegisterButton, TagsContainer, TagsHeader } from "./style";
import { TagModal } from "./components/modalCreateTag";


export default function Tags() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }
    
    return (
        <TagsContainer>
            <TagsHeader>
                <h2>Contatos</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </TagsHeader>
            <PaginatedItems itemsPerPage={9}/>
            {isOpenCreate && <TagModal closeModal={handleOpenModalCreate} />}
        </TagsContainer>
    )
}