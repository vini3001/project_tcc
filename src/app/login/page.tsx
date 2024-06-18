'use client'

import { LoginBox, LoginContainer, LoginForm, IconForm } from "./styles"
import styles from './styles.module.css'
import policeIcon from '../../../public/assets/Emblema novo PCSP_1573140723106.png'
import { InputButton, InputCustom, InputLabel } from "../global/styles/style"

export default function Login() {

    return (
        <>
            {/* <Header /> */}
            <LoginContainer>
                <LoginBox className={styles.form_custom}>
                    <LoginForm className="gap-y-2">
                            <div className="flex justify-center m-2">
                                <IconForm src={policeIcon.src} />
                            </div>
                            <div className="flex flex-col w-full justify-center items-start gap-y-2">
                                <InputLabel>Usuário</InputLabel>
                                <InputCustom type="text"/>
                            </div>
                        
                            <div className="flex flex-col w-full justify-center items-start gap-y-2">
                                <InputLabel>Senha</InputLabel>
                                <InputCustom className="grow" type="password" />
                            </div>                            

                            <div className="flex w-full justify-center">
                                <InputButton style={{width: '30%'}} value={'Login'} type="submit" />
                            </div>
                    </LoginForm>
                </LoginBox>
            </LoginContainer>
        </>
    )
}