import Link from "next/link";
import { MailSendChatBox, MailSendChatMessage, MailSendChatSend, MailSendChatSideContent, MailSendHeader } from "../style";
import { GoBackIcon } from "@/app/global/styles/style";
import goBackIcon from '../../../assets/svg/goBack.svg'
import sendIcon from '../../../assets/svg/icons8-avião-de-papel-32.png'
import Image from "next/image";
import threeDots from '../../../assets/svg/icons/threeDots.svg'
import { ThreeDots } from "../style";
import OptionGroup from "./addTag";
import { useEffect, useState } from "react";
import { routeConnectInstance, routeGetMessages, routeListParticipants, routeSendMessage } from "@/backend/whatsapp";
import { toastError } from "@/utils/toastify";
import { useQuery } from "react-query";
import { Loading } from "@/app/components/Loading";
import { Tag, TagResponse } from "@/app/entities/Tag";
import { routeListContacts } from "@/backend/contact";
import { Contact } from "@/app/entities/Contact";
import { routeGetMessagesByTag, routeSendMessageBackend } from "@/backend/message";

interface MailSendSideChatProps {
    tag: Tag | undefined
    close: () => void
}

export default function MailSendSideChat({tag, close}: MailSendSideChatProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [participants, setParticipants] = useState<Contact[]>([])
    const [text, setText] = useState<string>('')

    useQuery({queryKey: 'listContacts', queryFn: () => {
        routeListContacts.request({})
        .then((response) => {
            let participantsList: Contact[] = []
            participantsList = response.data!.filter((item) => {
                return item.tags[0] === tag?.tag
            })
            console.log(participantsList)

            setParticipants(participantsList)            
        }) 
    }})

    const {refetch} = useQuery({queryKey: 'listMessages', queryFn: () => {
        routeGetMessagesByTag.request({id: tag!.id})
        .then((response) => {
            let messagesList: string[] = []
            
            if(response.data !== undefined){
                messagesList = response.data.map((item) => {
                    return item.mensagem
                })
            }

            setIsLoading(false)
            setMessages(messagesList) 
        }) 
       }
    })

    function handleCloseSideMenu() {
        close()
    }

    function handleOpenModal() {
        setIsOpen(!isOpen)
    }

    const handleChange = (event: any) => {
        setText(event.target.value);
      };

      async function handleSendMessage() { 
        setIsLoading(true);
    
        try {
            const sendMessagePromises = participants.map(async (item) => {
                try {
                    await routeSendMessageBackend.request({
                        contato_id: item.id,
                        mensagem: text
                    });
                    console.log('entrou')
                    await routeSendMessage.request({
                        number: item.celular,
                        textMessage: { text }
                    });
                } catch (error) {
                    console.error(`Erro ao enviar mensagem para ${item.celular}:`, error);
                    toastError(`Erro ao enviar mensagem para ${item.celular}`);
                }
            });
    
            await Promise.all(sendMessagePromises);
            
            console.log('Mensagens enviadas com sucesso!');
        } catch (error) {
            console.error('Erro geral ao enviar mensagens:', error);
            toastError('Erro ao enviar mensagens');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <MailSendChatSideContent className="bg-gray-300 -top-4">
            <MailSendHeader>
                <div className="flex flex-row items-center">
                    <GoBackIcon onClick={handleCloseSideMenu} src={goBackIcon.src} />
                    <h3>{tag!.tag}</h3>
                </div>
            </MailSendHeader>
            <MailSendChatBox>             
                    {isLoading === false ? messages.map((mensagem) => {
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