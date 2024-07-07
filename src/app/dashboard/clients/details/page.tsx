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

export default function ClientDetails() {
        const [isOpenEdit, setIsOpenEdit] = useState(false)
        const searchParams = useSearchParams()

        const clientId = searchParams.get('id')

        function handleOpenModalEdit() {
                setIsOpenEdit(!isOpenEdit)
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
                                <a>Vinícius Donizeti dos Santos Ataliba</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>CPF</h6>
                                <a>47258424865</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Telefone</h6>
                                <a>16994270955</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Email</h6>
                                <a>donizetevinicius250@gmail.com</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Endereço</h6>
                                <a>Rua Alberto salgueiro, 567 - Jardim Paulista / Ribeirão Preto - SP</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>CEP</h6>
                                <a>14090052</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Quantidade de usuários</h6>
                                <a>20</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Quantidade de disparos feitos</h6>
                                <a>10</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Quantidade de contatos</h6>
                                <a>3</a>
                        </DetailsContent>
                        <div className="flex flex-row w-full col-span-2 gap-2">
                                <CustomButton onClick={handleOpenModalEdit} color="#007bff">
                                        Editar
                                </CustomButton>
                                <CustomButton onClick={handleOpenModalEdit} color="red">
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