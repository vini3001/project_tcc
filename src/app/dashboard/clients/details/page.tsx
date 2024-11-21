'use client'

import { GoBackIcon } from "@/app/global/styles/style";
import { ClientContainer } from "../styles";
import ClientModal from "../components/modalEditCli";
import goBackIcon from '../../../assets/svg/goBack.svg'
import { DetailsContainer, DetailsContent, DetailsHeader } from "./styles";
import Link from "next/link";
import CustomButton from "../components/buttons";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { routeDeleteClient, routeGetClient } from "@/backend/client";
import { useQuery } from "react-query";
import { Client } from "@/app/entities/Client";

export default function ClientDetails() {
        const [isOpenEdit, setIsOpenEdit] = useState(false)
        const [client, setClient] = useState<Client>()
        const searchParams = useSearchParams()

        const clientId = parseInt(searchParams.get('id') !== null ? searchParams.get('id') as string : '0')

        useQuery({queryKey: 'getClient', queryFn: () => {
                routeGetClient.request({id: clientId}).then((item) => {
                        setClient(item.data)
                })
        },
        enabled: clientId !== 0
        })
 
        function handleOpenModalEdit() {
                setIsOpenEdit(!isOpenEdit)
        }

        async function handleDeleteClient(id: number) {
                await routeDeleteClient.request({id})
        }

        return (
                <ClientContainer>
                <div className="flex flex-row items-center gap-4 mb-4">
                        <Link href={"/dashboard/clients"}>
                                <GoBackIcon src={goBackIcon.src} />
                        </Link>
                        <DetailsHeader>
                                <h2 className="m-0">Detalhes do cliente</h2>
                        </DetailsHeader>
                </div>
                 
                <DetailsContainer className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3">
                        <DetailsContent>
                                <h6>Nome Completo</h6>
                                <a>{client!.nome}</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>CPF</h6>
                                <a>{client!.cep}</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Telefone</h6>
                                <a>{client!.telefone}</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Email</h6>
                                <a>{client!.email}</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Endereço</h6>
                                <a>{client!.logradouro}</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>CEP</h6>
                                <a>{client!.cep}</a>
                        </DetailsContent>
                        <div className="flex flex-row w-full col-span-2 gap-2">
                                <CustomButton onClick={handleOpenModalEdit} color="#007bff">
                                        Editar
                                </CustomButton>
                                <CustomButton onClick={() => {handleDeleteClient(clientId)}} color="red">
                                        Deletar
                                </CustomButton>
                                <Link href={"/dashboard/clients/users?id=" + clientId}>
                                        <CustomButton color="#163780">
                                                Usuários
                                        </CustomButton>
                                </Link>
                        </div>

                        {isOpenEdit && (
                                <ClientModal closeModal={handleOpenModalEdit} />
                        )}
                </DetailsContainer>
                </ClientContainer>
        )
}