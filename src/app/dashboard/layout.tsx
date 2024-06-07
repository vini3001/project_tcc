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

export default function Register({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-row">
            <DashboardSideMenu>
                <div className="flex justify-center m-2 p-2">
                    <MainIconForm width={'48px'} height={'64px'} src={policeIcon.src} alt=""/>
                </div>
                <hr className="text-white"/>
                <div className="flex flex-col h-[100%] space-y-10 items-center p-2">
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={house.src} alt={""} /> <DashboardText>Dashboard</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={people.src} alt={""} /> <DashboardText>Clientes</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={contact.src} alt={""} /><DashboardText>Contatos</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={mail.src} alt={""} /><DashboardText>Mensagens</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={send.src} alt={""} /><DashboardText>Envios</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={settings.src} alt={""} /><DashboardText>Configurações</DashboardText>
                    </DashboardTextContainer>
                    <DashboardTextContainer>
                        <MenuIconForm size={'20px'} src={user.src} alt={""} /><DashboardText>Usuários</DashboardText>
                    </DashboardTextContainer>
                </div>
            </DashboardSideMenu>
            <section className="grow m-3">
                <DashboardHeader className="grid-cols-2 grid-rows-1">
                    <MenuIconForm src={menuIcon.src} size={'24px'} />
                    <MenuIconForm className="justify-self-end" color="black" size={'32px'} src={user.src} alt={""} />
                </DashboardHeader>
                <hr />
                {children}
            </section>
        </div>
    )
}