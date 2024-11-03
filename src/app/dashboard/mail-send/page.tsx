'use client'

import { useEffect, useState } from "react";
import { MailSendChatSideContent, MailSendContainer, MailSendContent } from "./style";
import MailSendSideChatContact from "./components/MailSendSideChatContact";
import MailSendSideChatGroup from "./components/MailSendSideChatGroup";
import threeDots from '../../assets/svg/icons/threeDots.svg'
import { ThreeDots } from "./style";
import { Contact } from "@/app/entities/Contact";
import { routeListContacts } from "@/backend/contact";
import { toastError } from "@/utils/toastify";
import { routeListGroups } from "@/backend/whatsapp";
import { GetGroupsResponse } from "@/app/entities/Whatsapp";

export default function MailSend() {
    const [isOpenContactModel, setIsOpenContactModel] = useState(false)
    const [isOpenGroupModel, setIsOpenGroupModel] = useState(false)
    const [selectedContact, setSelectedContact] = useState<Contact>()
    const [selectedGroup, setSelectedGroup] = useState<GetGroupsResponse>()
    const [contacts, setContacts] = useState<Contact[]>([])
    const [groups, setGroups] = useState<GetGroupsResponse[]>([])

    useEffect(() => {
        routeListContacts.request({})
        .then((response) => {response.data !== undefined && setContacts(response.data)})
        .catch((err) => {throw toastError('Falha ao listar contatos!')})

        routeListGroups.request({})
        .then((response) => {response.data !== undefined && setGroups(response.data) })
    },[])

    function handleOpenGroupDetails(group: GetGroupsResponse) {
        setSelectedGroup(group)
        setIsOpenGroupModel(!isOpenGroupModel)
    }

    function handleOpenContactDetails(contact: Contact) {
        setSelectedContact(contact)
        setIsOpenContactModel(!isOpenContactModel)
    }
    return (
        <section className="flex flex-col gap-5">
            <div className="flex flex-row">
                <MailSendContainer className="max-h-[50vh] overflow-auto">
                <MailSendContent>
                <div className="bg-gray-300 p-[10px]">
                    <ThreeDots src={threeDots.src} />
                </div>
                    {contacts.map((item) => {
                        return (
                            <>
                            <div id="contactCard" key={item.nome} className="p-3 cursor-pointer hover:bg-gray-50" onClick={() =>{handleOpenContactDetails(item)}}>
                            <h5>{item.nome}</h5>
                            <a>dasdasd</a>
                            </div>
                            <hr className="m-0" />
                            </>
                        )
                    })}
                <div className="bg-gray-300 p-[10px]" />
                </MailSendContent>
                </MailSendContainer>
                {isOpenContactModel && 
                    <MailSendSideChatContact contact={selectedContact} close={() => {setIsOpenContactModel(false)}}/>
                }
            </div>
            <div className="flex flex-row">
                <MailSendContainer>
                <MailSendContent>
                <div className="bg-gray-300 p-[10px]">
                    <ThreeDots src={threeDots.src} />
                </div>
                    {groups.map((item) => {
                        return (
                            <>
                            <div id="contactCard" key={item.id} className="p-3 cursor-pointer hover:bg-gray-50" onClick={() =>{handleOpenGroupDetails(item)}}>
                            <h5>{item.subject}</h5>
                            <a>dasdasd</a>
                            </div>
                            <hr className="m-0" />
                            </>
                        )
                    })}
                <div className="bg-gray-300 p-[10px]" />
                </MailSendContent>
                </MailSendContainer>
                {isOpenGroupModel && 
                    <MailSendSideChatGroup group={selectedGroup} close={() => {setIsOpenGroupModel(false)}}/>
                }
            </div>
        </section>
    )
}