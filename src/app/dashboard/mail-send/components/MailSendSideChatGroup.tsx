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
import { routeConnectInstance, routeGetMessages, routeListParticipants, routeSendMessage } from "@/backend/whatsapp";
import { toastError } from "@/utils/toastify";
import { Contact } from "@/app/entities/Contact";
import { useQuery } from "react-query";
import { Loading } from "@/app/components/Loading";
import { GetGroupsResponse } from "@/app/entities/Whatsapp";

interface MailSendSideChatProps {
    group: GetGroupsResponse | undefined
    close: () => void
}

export default function MailSendSideChat({group, close}: MailSendSideChatProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<String[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [participantsId, setParticipantsId] = useState<String[]>([])
    const [text, setText] = useState<string>('')
    const [status, setStatus] = useState<String>('')

    const {refetch} = useQuery({queryKey: 'listMessages', queryFn: () => {
        routeConnectInstance.request({})
        .then((response) => {setStatus(response.data!.instance.state)})

        routeListParticipants.param = {groupJid: group?.id}
        routeListParticipants.request({})
        .then((response) => {
            let participantsList: String[] = []
            response.data?.map((item) => {
                participantsList.push(item.participant.id.substring(0, 13))
            })
            setParticipantsId(participantsList)            
        }) 
    }})

    function handleCloseSideMenu() {
        close()
    }

    function handleOpenModal() {
        setIsOpen(!isOpen)
    }

    const handleChange = (event: any) => {
        setText(event.target.value);
      };

    function handleSendMessage() {
        if (status !== 'open') {
            toastError('Erro ao iniciar instância')
        } else {
            participantsId.map((id) => {
                routeSendMessage.request({
                    number: id,
                    textMessage: {
                        text
                    }
                })
                setIsLoading(true)
            })
        }
        

        refetch()
    }

    return (
        <MailSendChatSideContent className="bg-gray-300">
            <MailSendHeader>
                <div className="flex flex-row items-center">
                    <GoBackIcon onClick={handleCloseSideMenu} src={goBackIcon.src} />
                    <h3>{group!.subject}</h3>
                </div>
                <ThreeDots onClick={handleOpenModal} src={threeDots.src} />
                {isOpen && <OptionGroup />}
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