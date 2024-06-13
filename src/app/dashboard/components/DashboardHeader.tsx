import { DashboardHeader, MenuIconForm } from "../styles"
import menuIconClosed from '../../assets/svg/icons/menuIconClosed.svg'
import menuIconOpened from '../../assets/svg/icons/menuIconOpen.svg'
import user from '../../assets/svg/icons/user.svg'
import SvgIcon from "@/app/assets/svg/icons/indext"

interface DashboardHeaderProps {
    closeModal: () => void,
    isOpen: boolean
}

export default function Dashboardheader({closeModal, isOpen}: DashboardHeaderProps) {
    function handleShowMessage() {
        closeModal()
    }

    return (
        <DashboardHeader className="grid-cols-2 grid-rows-1">
            <MenuIconForm onClick={handleShowMessage} src={isOpen ? menuIconOpened.src : menuIconClosed.src} style={{width: '40px', height: '40px', padding: '2px', cursor: 'pointer', borderRadius: '100%'}} />
            <MenuIconForm className="justify-self-end" color="black" style={{width: '40px', height: '40px', cursor: 'pointer', borderRadius: '100%'}} src={user.src} />
        </DashboardHeader>
    )
}