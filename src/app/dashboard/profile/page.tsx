'use client'

import { useState } from "react";
import { ProfileContainer, ProfileContent } from "./styles";
import Image from "next/image";
import userIcon from '@/app/assets/svg/icons/user.svg'
import { useForm } from "react-hook-form";
import { User } from "@/app/entities/User";
import { InputButton } from "@/app/global/styles/style";
import { routeEditUser } from "@/backend/user";
import { toastSuccess } from "@/utils/toastify";

export default function PerfilPage() {
    const [photo, setPhoto] = useState("");

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
        <ProfileContainer>
            <ProfileContent className="w-[80vw] md:w-[40vw]" onSubmit={handleSubmit(onSubmit)}>
                <PreviewPhoto src={photo ? photo : userIcon.src} onChange={handlePhotoChange}/>
                <div>
                    <h4>Nome</h4>
                    <input {...register('nome')} value={'Vinícius'}/>
                </div>

                <div>
                    <h4>Email</h4>
                    <input {...register('email')} value={'donizetevinicius250@gmail.com'}/>
                </div>

                <div>
                    <h4>Senha</h4>
                    <input {...register('password')} value={'1234'}/>
                </div>

                <InputButton type="submit">Editar</InputButton>
            </ProfileContent>
        </ProfileContainer>
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