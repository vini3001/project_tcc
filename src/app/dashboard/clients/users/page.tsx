'use client'

import { GoBackIcon, RegisterButton } from "@/app/global/styles/style";
import { PaginatedItems } from "./components/usersPagination";
import { UserContainer, UserHeader } from "./styles";
import { useEffect, useState } from "react";
import UserModalCreate from './components/modalCreateUser'
import goBackIcon from '../../../assets/svg/goBack.svg'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function UserPage() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)
    const [clientId, setClientId] = useState(0)

    const searchParams = useSearchParams()

    useEffect(() => {
        setClientId(parseInt(searchParams.get('id') as string))
    }, [searchParams])

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }
    
    return (
        <UserContainer>
            <div className="flex flex-row items-center w-full gap-4 mb-4">
                <Link href={"/dashboard/clients/details?id=" + clientId}>
                        <GoBackIcon src={goBackIcon.src} />
                </Link>
                <UserHeader>
                        <h2 className="m-0">Usuários</h2>
                        <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
                </UserHeader>
            </div>

            <PaginatedItems itemsPerPage={9} clientId={clientId}/>

            {isOpenCreate && (
                <UserModalCreate closeModal={handleOpenModalCreate} />
            )}

        </UserContainer>
    )
}