import { CloseButton, HeaderText, RegisterBox, RegisterForm } from "@/app/global/styles/style";
import { routeConnectInstance } from "@/backend/whatsapp";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import closeButton from '../../../assets/svg/closeButton.svg'
import { Loading } from "@/app/components/Loading";

export interface QrCode  {
    closeModal: () => void
}

export function QrCode({closeModal}: QrCode) {
    const [code64, setCode64] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function handleCloseModal() {
        closeModal()
    }

    useQuery({queryKey: 'connectInstance', queryFn: () => {
        setIsLoading(false)
        routeConnectInstance.request({})
        .then((response) => {
            setCode64(response.data!.base64)
            setIsLoading(true)
        })
    }
   })

    return (
        <RegisterBox>
            {isLoading ? 
            <RegisterForm >
                <CloseButton onClick={handleCloseModal} src={closeButton.src} />
                <div>
                    <HeaderText>QrCode para conexão</HeaderText>
                </div>
                <Image width={300} height={300} src={code64} alt={"Imagem QrCode"} />
            </RegisterForm> : <Loading isLoading={true} />}
        </RegisterBox>
    )
}