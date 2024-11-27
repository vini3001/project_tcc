'use client'

import { GoBackIcon, RegisterButton } from "@/app/global/styles/style";
import { PaginatedItems } from "./components/usersPagination";
import { UserContainer, UserHeader } from "./styles";
import { useEffect, useState } from "react";
import UserModalCreate from './components/modalCreateUser'
import goBackIcon from '../../../assets/svg/goBack.svg'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { Loading } from "@/app/components/Loading";

export default function UserPage() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    const searchParams = useSearchParams()

    const clientId = parseInt(searchParams.get('id') !== null ? searchParams.get('id') as string : '0')

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }
    
    return (
        <>
        {clientId !== 0 ?
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

       </UserContainer> : <Loading isLoading={true} /> 
        }
        </>
    )
}