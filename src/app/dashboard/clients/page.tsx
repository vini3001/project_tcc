'use client'

import { useState } from "react"
import ClientModalCreate from "./components/modalCreate"
import { ClientContainer, ClientHeader, EditIcon, Table, TableContainer } from "./styles"
import { RegisterButton } from "@/app/global/styles/style"
import editIcon from '../../assets/svg/icons/edit.svg'
import Link from "next/link"

export default function Clients() {
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate(){
        setIsOpenCreate(!isOpenCreate)
    }

    return (
        <ClientContainer className="grid-rows-2">
            <ClientHeader>
                <h2>Cadastro de clientes</h2>
                <RegisterButton onClick={handleOpenModalCreate}>+</RegisterButton>
            </ClientHeader>

            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>EMAIL</th>
                            <th>PLANO</th>
                            <th>DATA DE CADASTRO</th>
                            <th style={{borderRight: 'none'}}>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vinícius Donizeti dos Santos Ataliba</td>
                            <td>donizetevinicius250@gmail.com</td>
                            <td>Anual</td>
                            <td>30/01/2004</td>
                            <td style={{borderRight: 'none'}}>
                                <Link href={'/dashboard/clients/details'}>
                                    <EditIcon src={editIcon.src} />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </TableContainer>

            {isOpenCreate && (
                <ClientModalCreate closeModal={handleOpenModalCreate} />
            )}

        </ClientContainer>
    )
}