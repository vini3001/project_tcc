'use client'

import { DashboardSideMenu, DashboardMenuText, DashboardTextContainer, MenuIconForm, MainIconForm, DashboardHeader, DashboardMainText } from "./styles"
import house from '../assets/svg/icons/house.svg'
import contact from '../assets/svg/icons/contact.svg'
import mail from '../assets/svg/icons/mail.svg'
import send from '../assets/svg/icons/send.svg'
import settings from '../assets/svg/icons/settings.svg'
import people from '../assets/svg/icons/people.svg'
import logo from '../assets/pngwing.com (1).png'
import Dashboardheader from "./components/DashboardHeader"
import { useState } from "react"
import SvgIcon from "../assets/svg/icons/indext"

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
        <div className="flex flex-row">
            {isOpen ? (
                <>
                <DashboardSideMenu>
                    <div className="flex space-x-4 items-center justify-center m-2 p-2">
                        <MainIconForm src={logo.src} alt=""/>
                        <DashboardMenuText>Vortex</DashboardMenuText>
                    </div>
                    <hr className="text-white"/>
                    {/*items-center*/}
                    <div className="flex flex-col h-[100%] space-y-10 p-2 mx-10">
                        <DashboardTextContainer>
                            <MenuIconForm src={house.src} alt={""} /> <DashboardMenuText>Dashboard</DashboardMenuText>
                        </DashboardTextContainer>
                        <DashboardTextContainer>
                            <MenuIconForm src={people.src} alt={""} /> <DashboardMenuText>Clientes</DashboardMenuText>
                        </DashboardTextContainer>
                        <DashboardTextContainer>
                            <MenuIconForm src={contact.src} alt={""} /><DashboardMenuText>Contatos</DashboardMenuText>
                        </DashboardTextContainer>
                        <DashboardTextContainer>
                            <MenuIconForm src={mail.src} alt={""} /><DashboardMenuText>Mensagens</DashboardMenuText>
                        </DashboardTextContainer>
                        <DashboardTextContainer>
                            <MenuIconForm src={send.src} alt={""} /><DashboardMenuText>Envios</DashboardMenuText>
                        </DashboardTextContainer>
                        <DashboardTextContainer>
                            <MenuIconForm src={settings.src} alt={""} /><DashboardMenuText>Configurações</DashboardMenuText>
                        </DashboardTextContainer>
                    </div>
                </DashboardSideMenu>
            </>
            ) : (
                <>
                    <DashboardSideMenu>
                        <div className="flex space-x-4 items-center justify-center m-2 p-2">
                            <MainIconForm src={logo.src} alt=""/>
                        </div>
                        <hr className="text-white"/>
                        <div className="flex flex-col h-[100%] space-y-10 items-center p-2">
                            <DashboardTextContainer>
                                <MenuIconForm src={house.src} alt={""} />
                            </DashboardTextContainer>
                            <DashboardTextContainer>
                                <MenuIconForm src={people.src} alt={""} />
                            </DashboardTextContainer>
                            <DashboardTextContainer>
                                <MenuIconForm src={contact.src} alt={""} />
                            </DashboardTextContainer>
                            <DashboardTextContainer>
                                <MenuIconForm src={mail.src} alt={""} />
                            </DashboardTextContainer>
                            <DashboardTextContainer>
                                <MenuIconForm src={send.src} alt={""} />
                            </DashboardTextContainer>
                            <DashboardTextContainer>
                                <MenuIconForm src={settings.src} alt={""} />
                            </DashboardTextContainer>
                        </div>
                    </DashboardSideMenu>
                </>
            )}
            <section className="grow m-3">
                <Dashboardheader closeModal={handleCloseModal} isOpen={isOpen}/>
                <hr />
                {children}
            </section>
        </div>
    )
}