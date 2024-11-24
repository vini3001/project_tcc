import { MailSendChatBox, MailSendChatMessage, MailSendChatSend, MailSendChatSideContent, MailSendHeader, ThreeDots } from "../style";
import { GoBackIcon } from "@/app/global/styles/style";
import goBackIcon from '../../../assets/svg/goBack.svg'
import sendIcon from '../../../assets/svg/icons8-avião-de-papel-32.png'
import Image from "next/image";
import { useState } from "react";
import { routeGetMessages, routeSendMessage } from "@/backend/whatsapp";
import { Contact } from "@/app/entities/Contact";
import { useQuery } from "react-query";
import { Loading } from "@/app/components/Loading";
import { routeSendMessageBackend } from "@/backend/message";
import threeDots from '../../../assets/svg/icons/threeDots.svg'

interface MailSendSideChatProps {
    contact: Contact | undefined
    close: () => void
}

export default function MailSendSideChat({contact, close}: MailSendSideChatProps) {
    const [messages, setMessages] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    
    const {refetch} = useQuery({queryKey: 'listMessages', queryFn: () => {
        routeGetMessages.request({})
        .then((response) => {
            let messagesList: string[] = []
            response.data?.map((item) => {
                if (item.messageType === 'extendedTextMessage' && item.key.remoteJid.substring(0, 13) === '55' + contact!.celular) {
                   messagesList.push(item.message.extendedTextMessage.text)
                }
            })
            setMessages(messagesList) 
            setIsLoading(false)
        }) 
    }
})

    function handleCloseSideMenu() {
        close()
    }

    const handleChange = (event: any) => {
        setText(event.target.value);
      };

    function handleSendMessage() {
            routeSendMessageBackend.request({
                contato_id: contact!.id,
                mensagem: text
            })
            
            routeSendMessage.request({
                number: contact!.celular,
                textMessage: {
                    text
                }
            })
            setIsLoading(true)

            setTimeout(() => {refetch()}, 2000)
    }

    function handleOpenModal() {
        setIsOpen(!isOpen)
    }

    return (
        <MailSendChatSideContent className="bg-gray-300">
            <MailSendHeader>
                <div className="flex flex-row items-center grow">
                    <GoBackIcon onClick={handleCloseSideMenu} src={goBackIcon.src} />
                    <h3>{contact!.nome}</h3>
                </div>
            </MailSendHeader>
            <MailSendChatBox>             
                    {!isLoading ? messages.map((mensagem) => {
                        return (
                            <MailSendChatMessage key={Math.random()}>
                               {mensagem}
                            </MailSendChatMessage>
                        )
                    }) : <Loading isLoading={true} />}
            </MailSendChatBox>
            <MailSendChatSend>
                <input type="text" placeholder="Digite sua mensagem" value={text} onChange={handleChange} />
                <button onClick={handleSendMessage} className="flex justify-center items-center">
                    <Image src={sendIcon.src} width={27} height={27} alt={""}/>
                </button>
            </MailSendChatSend>  
        </MailSendChatSideContent>
    )
}