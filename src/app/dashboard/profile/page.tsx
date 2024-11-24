'use client'

import { useEffect, useState } from "react";
import { ProfileContainer, ProfileContent } from "./styles";
import Image from "next/image";
import userIcon from '@/app/assets/svg/icons/user.svg'
import { useForm } from "react-hook-form";
import { User } from "@/app/entities/User";
import { InputButton } from "@/app/global/styles/style";
import { routeEditUser, routeGetUser } from "@/backend/user";
import { toastSuccess } from "@/utils/toastify";
import { useQuery } from "react-query";
import { useAuth } from "@/app/contexts/AuthContext";
import { Loading } from "@/app/components/Loading";

export default function PerfilPage() {
    const [photo, setPhoto] = useState("");
    const [user, setUser] = useState<User>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {userId} = useAuth()

    useEffect(() => {
        async function getUser() {
            await routeGetUser.request({id: userId as number}).then((item) => {
                setUser(item.data)
                setIsLoading(false)
               })
        }

        getUser()
    }, [userId])

    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    function onSubmit(data: User) {
        routeEditUser.request(data).then(() => {toastSuccess('Usuário editado com sucesso!')})
    }

    const handlePhotoChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };
    
    return (
        <>
            {!isLoading ? (
            <ProfileContainer>
            <ProfileContent className="w-[80vw] md:w-[40vw]" onSubmit={handleSubmit(onSubmit)}>
                <PreviewPhoto src={photo ? photo : userIcon.src} onChange={handlePhotoChange}/>
                <div>
                    <h4>Nome</h4>
                    <input {...register('nome')} defaultValue={user!.nome !== undefined ? user!.nome : ''}/>
                </div>

                <div>
                    <h4>Email</h4>
                    <input {...register('email')} defaultValue={user!.email !== undefined ? user!.email : ''}/>
                </div>

                <div>
                    <h4>Senha</h4>
                    <input {...register('password')} defaultValue={user!.password !== undefined ? user!.password : ''}/>
                </div>

                <input  />
                <InputButton type="submit">Editar</InputButton>
            </ProfileContent>
        </ProfileContainer> 
        ): <Loading isLoading={true} />}
        </>
    )
}

interface PreviewPhotoProps {
    src: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PreviewPhoto({src, onChange}: PreviewPhotoProps) {

    return (
        <ProfileContainer>
            <div className="relative">
                <Image className="cursor-pointer" src={src} width={60} height={60} alt={""}/>
                <input id="inputPhoto" type="file" className="absolute cursor-pointer opacity-0 h-[100%] w-[100%] top-0" onChange={onChange}/>
            </div>
        </ProfileContainer>
    )
}