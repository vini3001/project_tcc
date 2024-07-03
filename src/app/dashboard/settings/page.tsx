'use client'
import { RegisterButton } from "@/app/global/styles/style";
import { SettingsContainer, SettingsHeader } from "./styles";
import { useState } from "react";
import { PaginatedItems } from "./components/settingsPagination";



export default function Settings() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    
    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <SettingsContainer>
            <SettingsHeader>
                <h2>Conexões</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </SettingsHeader>

            <PaginatedItems itemsPerPage={9}/>

            {/* {isOpenCreate && (
                <ClientModalCreate closeModal={handleOpenModalCreate} />
            )} */}

        </SettingsContainer>
    )
}