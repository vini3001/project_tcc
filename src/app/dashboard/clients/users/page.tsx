'use client'

import { RegisterButton } from "@/app/global/styles/style";
import { PaginatedItems } from "./components/usersPagination";
import { UserContainer, UserHeader } from "./styles";
import { useEffect, useState } from "react";
import UserModalCreate from './components/modalCreateUser'

export default function UserPage() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    useEffect(() => {
        async function fetchData() {
            //const clients = await routeListClient.request({})
        }

        fetchData()
    }, [])

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }
    
    return (
        <UserContainer>
            <UserHeader>
                <h2>Usuários</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </UserHeader>

            <PaginatedItems itemsPerPage={9}/>

            {isOpenCreate && (
                <UserModalCreate closeModal={handleOpenModalCreate} />
            )}

        </UserContainer>
    )
}