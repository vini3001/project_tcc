'use client'

import { useState } from "react";
import { MailSendContainer, MailSendContent } from "./style";
import MailSendSideChat from "./components/MailSendSideChat";
import threeDots from '../../assets/svg/icons/threeDots.svg'
import { ThreeDots } from "./style";

export default function MailSend() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedContact, setSelectedContact] = useState<{nome: string}>()
    const listCli = [{nome: 'Josias'}, {nome: 'Eduardo'}]

    function handleOpenDetails(contact: {nome: string}) {
        setSelectedContact(contact)
        setIsOpen(!isOpen)
    }
    return (
        <section className="flex flex-row">
            <MailSendContainer>
            <MailSendContent>
            <div className="bg-gray-300 p-[10px]">
                <ThreeDots src={threeDots.src} />
            </div>
                {listCli.map((item) => {
                    return (
                        <>
                        <div id="contactCard" key={item.nome} className="p-3 cursor-pointer hover:bg-gray-50" onClick={() =>{handleOpenDetails(item)}}>
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
            {isOpen && 
                <MailSendSideChat contact={selectedContact} close={() => {setIsOpen(false)}}/>
            }
        </section>
    )
}