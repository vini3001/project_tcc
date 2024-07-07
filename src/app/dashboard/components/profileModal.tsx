import { ModalProfileContainer, ModalProfileContent, ExitIcon, ModalProfileSurrounding, ProfileIcon } from "./styles";
import exitIcon from '@/app/assets/svg/icons/exit.svg'
import userIcon from '@/app/assets/svg/icons/user.svg'
import { useAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";

interface ProfileModalProps {

}

export default function ProfileModal() {
    const { signOut } = useAuth()

    function handleSignOut() {
        signOut()
    }

    return (
        <ModalProfileContainer>
            <ModalProfileSurrounding>
                <Link style={{textDecoration: 'unset', color: 'black'}} href={"/dashboard/profile"}>
                    <ModalProfileContent>
                        <ExitIcon src={userIcon.src}/> Perfil
                    </ModalProfileContent>
                </Link>
                <ModalProfileContent onClick={handleSignOut}>
                    <ProfileIcon src={exitIcon.src}/> Sair
                </ModalProfileContent>
            </ModalProfileSurrounding>
        </ModalProfileContainer>
    )
}