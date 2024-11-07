'use client'

import { useState } from "react";
import { PaginatedItems } from "./components/tagsPagination";
import { TagsContainer, TagsHeader } from "./style";
import { TagModal } from "./components/modalCreateTag";


export default function Tags() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }
    
    return (
        <TagsContainer>
            <TagsHeader>
                <h2>Tags</h2>
            </TagsHeader>
            <div className="flex flex-row w-full gap-5">
                <PaginatedItems itemsPerPage={9}/>
                <TagModal  />
            </div>
        </TagsContainer>
    )
}