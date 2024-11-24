'use client'

import { useEffect, useState } from "react";
import { MailSendContainer, MailSendContent, ThreeDots } from "./style";
import MailSendSideChatContact from "./components/MailSendSideChatContact";
import MailSendSideChatGroup from "./components/MailSendSideChatGroup";
import { Contact } from "@/app/entities/Contact";
import { routeListContacts } from "@/backend/contact";
import { toastError } from "@/utils/toastify";
import { routeListTags } from "@/backend/tag";
import { Tag } from "@/app/entities/Tag";
import AddTag, { ListTags } from "./components/addTag";
import { useQueries, useQuery } from "react-query";
import { HeaderText } from "@/app/global/styles/style";

export default function MailSend() {
    const [isOpenContactModel, setIsOpenContactModel] = useState(false)
    const [isOpenGroupModel, setIsOpenGroupModel] = useState(false)
    const [isOpenTags, setIsOpenTags] = useState(false)
    const [isOpenListTags, setIsOpenListTags] = useState(false)
    const [selectedContact, setSelectedContact] = useState<Contact>()
    const [selectedTag, setSelectedTag] = useState<Tag>()
    const [contacts, setContacts] = useState<Contact[]>([])
    const [tags, setTags] = useState<Tag[]>([])

    useQueries([
        {queryKey: 'listContacts', queryFn: () => {
            routeListContacts.request({})
            .then((response) => {response.data !== undefined && setContacts(response.data)})
            .catch((err) => {throw toastError('Falha ao listar contatos!')})
        }},

        {queryKey: 'listTags', queryFn: () => {
            routeListTags.request({})
            .then((response) => {response.data !== undefined && setTags(response.data) })
        }}
    ])

    function handleOpenGroupDetails(tag: Tag) {
        setSelectedTag(tag)
        setIsOpenGroupModel(!isOpenGroupModel)
        setIsOpenContactModel(false)
    }

    function handleOpenContactDetails(contact: Contact) {
        setSelectedContact(contact)
        setIsOpenContactModel(!isOpenContactModel)
        setIsOpenGroupModel(false)
    }

    function handleOpenTags(contact: Contact) {
        // @ts-ignore
        event.stopPropagation();
        // @ts-ignore
        event.preventDefault();

        setSelectedContact(contact)
        setIsOpenTags(!isOpenTags)
    }
    return (
        <section className="flex flex-col gap-5">
            <div className="flex flex-col">
                <HeaderText>Conversas</HeaderText>
                <div className="flex flex-row relative">
                    <MailSendContainer className="max-h-[50vh] overflow-auto">
                    <div className="bg-gray-300 p-[10px] rounded-t-lg">
                    </div>
                    <MailSendContent>
                        {contacts.map((item) => {
                            return (
                                <div key={item.id}>
                                <div id="contactCard" onContextMenu={() => {handleOpenTags(item)}} className="relative p-3 cursor-pointer hover:bg-gray-50" onClick={() =>{handleOpenContactDetails(item)}}>
                                <h5>{item.nome}</h5>
                                <a>{item.celular} - { item.tags.length !== 0 && item.tags[0]}</a>
                                {isOpenTags && selectedContact === item && 
                                    <AddTag openModal={() => {setIsOpenListTags(!isOpenListTags)}} />
                                }
                                </div>
                                <hr className="m-0" />
                                </div>
                            )
                        })}
                    </MailSendContent>
                    <div className="bg-gray-300 p-[10px] rounded-b-lg" />
                    </MailSendContainer>
                    {isOpenContactModel && 
                        <MailSendSideChatContact contact={selectedContact} close={() => {setIsOpenContactModel(false)}}/>
                    }
                </div>
            </div>
            {isOpenListTags &&
                    <ListTags contact={selectedContact} closeModal={() => {setIsOpenListTags(!isOpenListTags)}}/>
                }
            
            <div className="flex flex-col relative">
            <HeaderText>Tags</HeaderText>
            <div className="flex flex-row">
                <MailSendContainer className="max-h-[50vh] overflow-auto">
                <div className="bg-gray-300 p-[10px] rounded-t-lg" />
                <MailSendContent>
                    {tags.map((item) => {
                        return (
                            <div key={item.id} onClick={() =>{handleOpenGroupDetails(item)}}>
                            <div id="contactCard"  className="p-3 cursor-pointer hover:bg-gray-50" >
                            <h5>{item.tag}</h5>
                            </div>
                            <hr className="m-0" />
                            </div>
                        )
                    })}
                </MailSendContent>
                <div className="bg-gray-300 p-[10px] rounded-b-lg" />
                </MailSendContainer>
                {isOpenGroupModel && 
                    <MailSendSideChatGroup tag={selectedTag} close={() => {setIsOpenGroupModel(false)}}/>
                }
            </div>
            </div>
        </section>
    )
}