import { useEffect, useState } from "react"
import { DashboardSideMenu, DashboardMenuText, DashboardTextContainer, MenuIconForm, MainIconForm } from "../styles"
import house from '../../assets/svg/icons/house.svg'
import contact from '../../assets/svg/icons/contact.svg'
import tags from '../../assets/svg/icons/tags.svg'
import send from '../../assets/svg/icons/send.svg'
import connections from '../../assets/svg/icons/globe.svg'
import people from '../../assets/svg/icons/people.svg'
import logo from '../../assets/pngwing.com (1).png'
import menuIconClosed from '../../assets/svg/icons/menuIconClosed.svg'
import menuIconOpened from '../../assets/svg/icons/menuIconOpen.svg'
import { useAuth } from "@/app/contexts/AuthContext"
import { routeGetUser } from "@/backend/user"
import { useQuery } from "react-query"

interface SideMenuProps {
    isOpen: boolean
    minSize: boolean
    closeSideMenu: () => void
}

export default function SideMenu({isOpen, minSize, closeSideMenu}: SideMenuProps) {
    const [userAccess, setUserAccess] = useState<string | undefined>()
    const {userId} = useAuth()

    useQuery({queryKey: ['userLogin'], queryFn: () => {
        userId !== undefined && routeGetUser.request({id: userId}).then((response) => { setUserAccess(response.data?.nivel)})
    }, enabled: userId !== 0})

    function handleCloseSideMenuMobile() {
        closeSideMenu()
    }
    
    return (
        <>
            <section className="flex flex-row absolute h-fit md:hidden">
                {isOpen && (
                    <DashboardSideMenu>
                        <div className="flex space-x-4 items-center justify-center m-2 p-2">
                            <MainIconForm src={logo.src} alt=""/>
                            <DashboardMenuText>Vortex</DashboardMenuText>
                        </div>
                        <hr className="text-white"/>
                        {/*items-center*/}
                        <div className="flex flex-col h-[100%] space-y-10 p-2 mx-10">
                            <DashboardTextContainer href={"/dashboard/home"}>
                                <MenuIconForm src={house.src} alt={""} /><>Dashboard</>
                            </DashboardTextContainer>
                            <DashboardTextContainer href={"/dashboard/clients"}>
                                    <MenuIconForm src={people.src} alt={""} /> <>Clientes</>
                            </DashboardTextContainer>
                            <DashboardTextContainer href={"/dashboard/contacts"}>
                                <MenuIconForm src={contact.src} alt={""} /><>Contatos</>
                            </DashboardTextContainer>
                            <DashboardTextContainer href={"/dashboard/tags"}>
                                <MenuIconForm src={tags.src} alt={""} /><>Tags</>
                            </DashboardTextContainer>
                            <DashboardTextContainer href={"/dashboard/mail-send"}>
                                <MenuIconForm src={send.src} alt={""} /><>Envios</>
                            </DashboardTextContainer>
                            <DashboardTextContainer href={"/dashboard/connections"}>
                                <MenuIconForm src={connections.src} alt={""} /><>Conexões</>
                            </DashboardTextContainer>
                        </div>
                    </DashboardSideMenu>
                )}
                <MenuIconForm className="block md:hidden" onClick={handleCloseSideMenuMobile} src={isOpen ? menuIconOpened.src : menuIconClosed.src} style={{width: '40px', height: '40px', padding: '2px', cursor: 'pointer', borderRadius: '100%', top: '0', marginTop: '20px'}} />
            </section>
            <DashboardSideMenu minSize={minSize ? 'maximize' : 'minimize'} className="hidden md:block">
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
                        <DashboardTextContainer href={"/dashboard/contacts"}>
                            <MenuIconForm src={contact.src} alt={""} />{isOpen && <>Contatos</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/tags"}>
                            <MenuIconForm src={tags.src} alt={""} />{isOpen && <>Tags</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/mail-send"}>
                            <MenuIconForm src={send.src} alt={""} />{isOpen && <>Envios</>}
                        </DashboardTextContainer>
                        <DashboardTextContainer href={"/dashboard/connections"}>
                            <MenuIconForm src={connections.src} alt={""} />{isOpen && <>Conexões</>}
                        </DashboardTextContainer>
                    </div>
            </DashboardSideMenu>
        </>
    )
}