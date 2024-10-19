import Link from "next/link";
import { MailSendChatBox, MailSendChatMessage, MailSendChatSend, MailSendChatSideContent, MailSendHeader } from "../style";
import { GoBackIcon } from "@/app/global/styles/style";
import goBackIcon from '../../../assets/svg/goBack.svg'
import sendIcon from '../../../assets/svg/icons8-avião-de-papel-32.png'
import Image from "next/image";
import threeDots from '../../../assets/svg/icons/threeDots.svg'
import { ThreeDots } from "../style";
import OptionGroup from "./optionGroup";
import { useEffect, useState } from "react";
import { routeConnectInstance, routeSendMessage } from "@/backend/whatsapp";
import { toastError } from "@/utils/toastify";

interface MailSendSideChatProps {
    contact: {nome: string} | undefined
    close: () => void
}

export default function MailSendSideChat({contact, close}: MailSendSideChatProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState<String>('')
    
    useEffect(() => {
        routeConnectInstance.request({})
        .then((response) => {setStatus(response.data!.instance.state)})
    },[])

    function handleCloseSideMenu() {
        close()
    }

    function handleOpenModal() {
        setIsOpen(!isOpen)
    }

    function handleSendMessage() {
        if (status !== 'open') {
            toastError('Erro ao iniciar instância')
        } else {
            routeSendMessage.request({
                number: "5516994270955",
                textMessage: {
                    text: "teste"
                }
            })

            return
        }
    }

    return (
        <MailSendChatSideContent className="bg-gray-300">
            <MailSendHeader>
                <div className="flex flex-row items-center">
                    <GoBackIcon onClick={handleCloseSideMenu} src={goBackIcon.src} />
                    <h3>{contact!.nome}</h3>
                </div>
                <ThreeDots onClick={handleOpenModal} src={threeDots.src} />
                {isOpen && <OptionGroup />}
            </MailSendHeader>
            <MailSendChatBox>
                
                    {/* {mensagens.map((mensagem) => {
                        return (
                            <MailSendChatMessage key={mensagem.id}>
                               {mensagem.mensagem}
                            </MailSendChatMessage>
                        )
                    })} */}
            </MailSendChatBox>
            <MailSendChatSend>
                <input placeholder="Digite sua mensagem" />
                <button onClick={handleSendMessage} className="flex justify-center items-center">
                    <Image src={sendIcon.src} width={27} height={27} alt={""}/>
                </button>
            </MailSendChatSend>  
        </MailSendChatSideContent>
    )
}