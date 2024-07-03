'use client'

import { LoginBox, LoginContainer, LoginForm, IconForm } from "./styles"
import styles from './styles.module.css'
import policeIcon from '../../../public/assets/Emblema novo PCSP_1573140723106.png'
import { InputButton, InputCustom, InputLabel } from "../global/styles/style"
import { useForm } from "react-hook-form"
import { LoginRequestData } from "../entities/Auth"
import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoadingButton } from "../components/Loading"

export default function Login() {
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
            router.push('/')
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* <Header /> */}
            <LoginContainer>
                <LoginBox className={styles.form_custom}>
                    <LoginForm className="gap-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-center m-2">
                                <IconForm src={policeIcon.src} />
                            </div>
                            <div className="flex flex-col w-full justify-center items-start gap-y-2">
                                <InputLabel>Usuário</InputLabel>
                                <InputCustom type="text" {...register("email")}/>
                            </div>
                        
                            <div className="flex flex-col w-full justify-center items-start gap-y-2">
                                <InputLabel>Senha</InputLabel>
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
        </>
    )
}