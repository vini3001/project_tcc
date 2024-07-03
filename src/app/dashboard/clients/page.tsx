'use client'

import { useEffect, useState } from "react"
import ClientModalCreate from "./components/modalCreateCli"
import { ClientContainer, ClientHeader, EditIcon, Table, TableContainer } from "./styles"
import { RegisterButton } from "@/app/global/styles/style"
import editIcon from '../../assets/svg/icons/edit.svg'
import Link from "next/link"
import { routeListClient } from "@/backend/client"
import { PaginatedItems } from "./components/clientsPagination"

export default function Clients() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const clients = await routeListClient.request({})

            console.log(clients)
        }

        fetchData()
    }, [])

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <ClientContainer>
            <ClientHeader>
                <h2>Clientes</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </ClientHeader>

            <PaginatedItems itemsPerPage={9}/>

            {isOpenCreate && (
                <ClientModalCreate closeModal={handleOpenModalCreate} />
            )}

        </ClientContainer>
    )
}