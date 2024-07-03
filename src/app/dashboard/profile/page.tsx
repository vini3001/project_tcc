import { ProfileContainer, ProfileContent } from "./styles";
import Image from "next/image";

export default function PerfilPage() {
    return (
        <ProfileContainer>
            <ProfileContent>
                <PreviewPhoto />
            </ProfileContent>
        </ProfileContainer>
    )
}

interface PreviewPhotoProps {
    src: string
}

function PreviewPhoto({src}: PreviewPhotoProps) {
    return (
        <div className="absolute">
            <Image src={src} alt={""}/>
        </div>
    )
}