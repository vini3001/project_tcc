import { DashboardSideMenu, DashboardText, DashboardTextContainer, MenuIconForm, MainIconForm, DashboardHeader } from "./styles"
import policeIcon from '../../../public/assets/Emblema novo PCSP_1573140723106.png'
import house from '../assets/svg/house.svg'
import contact from '../assets/svg/contact.svg'
import mail from '../assets/svg/mail.svg'
import send from '../assets/svg/send.svg'
import settings from '../assets/svg/settings.svg'
import user from '../assets/svg/user.svg'
import people from '../assets/svg/people.svg'
import menuIcon from '../assets/svg/menuIcon.svg'
import logo from '../assets/pngwing.com (1).png'

export default function Register({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-row">
            <DashboardSideMenu>
                <div className="flex space-x-4 items-center justify-center m-2 p-2">
                    <MainIconForm src={logo.src} alt=""/>
                    <DashboardText>Vortex</DashboardText>
                </div>
                <hr className="text-white"/>
                <div className="flex flex-col h-[100%] space-y-10 items-center p-2">
                    <DashboardTextContainer>
                        <MenuIconForm src={house.src} alt={""} /> <DashboardText>Dashboard</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm src={people.src} alt={""} /> <DashboardText>Clientes</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm src={contact.src} alt={""} /><DashboardText>Contatos</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm src={mail.src} alt={""} /><DashboardText>Mensagens</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm src={send.src} alt={""} /><DashboardText>Envios</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm src={settings.src} alt={""} /><DashboardText>Configurações</DashboardText>
                    </DashboardTextContainer>
                </div>
            </DashboardSideMenu>
            <section className="grow m-3">
                <DashboardHeader className="grid-cols-2 grid-rows-1">
                    <MenuIconForm src={menuIcon.src} style={{width: '30px', height: '30px'}} />
                    <MenuIconForm className="justify-self-end" color="black" style={{width: '30px', height: '30px'}} src={user.src} alt={""} />
                </DashboardHeader>
                <hr />
                {children}
            </section>
        </div>
    )
}