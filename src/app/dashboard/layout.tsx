'use client'

import { DashboardSideMenu, DashboardMenuText, DashboardTextContainer, MenuIconForm, MainIconForm } from "./styles"
import house from '../assets/svg/icons/house.svg'
import contact from '../assets/svg/icons/contact.svg'
import mail from '../assets/svg/icons/mail.svg'
import send from '../assets/svg/icons/send.svg'
import settings from '../assets/svg/icons/settings.svg'
import people from '../assets/svg/icons/people.svg'
import logo from '../assets/pngwing.com (1).png'
import Dashboardheader from "./components/DashboardHeader"
import { useState } from "react"

export default function Register({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isOpen, setModalIsOpen] = useState(false)

    function handleCloseModal() {
        setModalIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-row w-full">
                <DashboardSideMenu>
                    <div className="flex space-x-4 items-center justify-center m-2 p-2">
                        <MainIconForm src={logo.src} alt=""/>
                        {isOpen && <DashboardMenuText>Vortex</DashboardMenuText>}
                    </div>
                    <hr className="text-white"/>
                    {/*items-center*/}
                    <div className="flex flex-col h-[100%] space-y-10 p-2 mx-10">
                        <DashboardTextContainer href={"/dashboard/home"}>
                            <MenuIconForm src={house.src} alt={""} /> {isOpen && <>Dashboard</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/clients"}>
                                <MenuIconForm src={people.src} alt={""} /> {isOpen && <>Clientes</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/home"}>
                            <MenuIconForm src={contact.src} alt={""} />{isOpen && <>Contatos</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/home"}>
                            <MenuIconForm src={mail.src} alt={""} />{isOpen && <>Mensagens</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/home"}>
                            <MenuIconForm src={send.src} alt={""} />{isOpen && <>Envios</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/home"}>
                            <MenuIconForm src={settings.src} alt={""} />{isOpen && <>Configurações</>}
                        </DashboardTextContainer>
                    </div>
                </DashboardSideMenu>

            <section className="grow m-3">
                <Dashboardheader closeModal={handleCloseModal} isOpen={isOpen}/>
                <hr />
                {children}
            </section>
        </div>
    )
}