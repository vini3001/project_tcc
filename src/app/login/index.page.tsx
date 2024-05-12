'use client'
import Header from "./components/header/header"
import { InputButton, LoginBox, LoginContainer, LoginForm, InputCustom, InputLabel, IconForm } from "./styles"
import styles from './styles.module.css'
import policeIcon from '../../../public/assets/Emblema novo PCSP_1573140723106.png'
import { testeApi } from "@/backend/login"
import axios from "axios"
import { Router } from "next/router"
import Link from "next/link"
import Test from "../register.page"

export default function Login() {

    async function handleSearchCli() {
        // const response = await testeApi.request({})
    }

    return (
        <>
            {/* <Header /> */}
            <LoginContainer>
                <LoginBox className={styles.form_custom}>
                    <LoginForm className="gap-y-2">
                            <div className="flex justify-center m-2">
                                <IconForm src={policeIcon.src} />
                            </div>
                            <div className="flex w-full justify-center items-center gap-x-2">
                                <InputLabel>Usuário</InputLabel>
                                <InputCustom type="text"/>
                            </div>
                        
                            <div className="flex w-full justify-center items-center gap-x-4">
                                <InputLabel>Senha</InputLabel>
                                <InputCustom className="grow" type="password" />
                            </div>                            

                            <div className="flex w-full justify-center">
                                <InputButton value={'Log In'} type="submit" />
                            </div>
                    </LoginForm>
                </LoginBox>
            </LoginContainer>
        </>
    )
}