'use client'

import { LoginBox, LoginContainer, LoginForm, IconForm } from "../styles"
import styles from '../styles.module.css'
import vortexIcon from '../../../../public/assets/pngwing.com (1).png'
import { InputButton, InputCustom, InputLabel } from '@/app/global/styles/style'
import { useForm } from "react-hook-form"
import { LoginRequestData } from "@/app/entities/Auth"
import { useAuth } from "@/app/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoadingButton } from "@/app/components/Loading"
import { toastError } from "@/utils/toastify"

export default function LoginComponent() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    const {signIn} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequestData>();

    async function onSubmit(data: LoginRequestData) {
        setIsLoading(true)
        const user = await signIn(data)
        if(user) {
            router.push('/dashboard/home')
            setIsLoading(false)
        } else {
            toastError('Erro ao realizar o login')
            setIsLoading(false)
            
        }
    }
    return (
        <LoginContainer>
        <LoginBox className={styles.form_custom}>
            <LoginForm className="w-[80vw] md:w-[25vw] gap-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center m-2">
                        <IconForm src={vortexIcon.src} />
                    </div>
                    <div className="flex flex-col w-full justify-center items-start gap-y-2">
                        <InputLabel className="text-white">Usuário</InputLabel>
                        <InputCustom type="text" {...register("email")}/>
                    </div>
                
                    <div className="flex flex-col w-full justify-center items-start gap-y-2">
                        <InputLabel className="text-white">Senha</InputLabel>
                        <InputCustom className="grow" type="password" {...register("password")}/>
                    </div>                            

                    <div className="flex w-full justify-center">
                        {isLoading ? (
                            <InputButton style={{width: '30%'}}>
                                <LoadingButton isLoading={true} />
                            </InputButton>
                        ) : (
                            <InputButton style={{width: '30%'}} value={'Login'} type="submit">Login</InputButton>
                        )}
                    </div>
            </LoginForm>
        </LoginBox>
    </LoginContainer>
    )
}