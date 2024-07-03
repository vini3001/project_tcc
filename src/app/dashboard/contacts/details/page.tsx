'use client'

import Link from "next/link";
import { ContactContainer } from "../styles";
import goBackIcon from '../../../assets/svg/goBack.svg'
import { GoBackIcon } from "@/app/global/styles/style";
import { DetailsContainer, DetailsContent, DetailsHeader } from "./styles";
import CustomButton from "../../clients/components/buttons";
import { useState } from "react";
import ContactModal from "../components/modalEditContact";


export default function ContactDetails() {
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    function handleOpenModalEdit() {
        setIsOpenEdit(!isOpenEdit)
    }

    return (
        <ContactContainer>
            <div className="flex flex-row items-center gap-4 mb-4">
                        <Link href={"/dashboard/contacts"}>
                        <GoBackIcon src={goBackIcon.src} />
                        </Link>
                        <DetailsHeader>
                                <h2 className="m-0">Detalhes do contato</h2>
                        </DetailsHeader>
                </div>
                 
                <DetailsContainer className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 md:auto-cols-auto">
                        <DetailsContent>
                                <h6>Nome Completo</h6>
                                <a>Vinícius Donizeti dos Santos Ataliba</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Email</h6>
                                <a>donizetevinicius250@gmail.com</a>
                        </DetailsContent>
                        <DetailsContent>
                                <h6>Celular</h6>
                                <a>16994270955</a>
                        </DetailsContent>
                        <div className="flex flex-row w-full col-span-2 gap-2">
                                <CustomButton onClick={handleOpenModalEdit} color="#007bff">
                                        Editar
                                </CustomButton>
                                <CustomButton onClick={handleOpenModalEdit} color="red">
                                        Deletar
                                </CustomButton>
                        </div>

                        {isOpenEdit && (
                                <ContactModal closeModal={handleOpenModalEdit} />
                        )}
                </DetailsContainer>
        </ContactContainer>
    )
}