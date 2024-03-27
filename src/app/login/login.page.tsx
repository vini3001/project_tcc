import Header from "./components/header/header"
import { InputButton, LoginBox, LoginContainer, LoginForm, InputCustom, InputLabel } from "./styles"
import styles from './styles.module.css'

export default function Login() {

    return (
        <>
            <LoginContainer>
                <LoginBox className={styles.form_custom}>
                    <LoginForm className="gap-y-2">
                            <InputLabel>Usuário</InputLabel>
                            <InputCustom type="text"/>
                        
                            <InputLabel>Senha</InputLabel>
                            <InputCustom type="password" />

                        <InputButton type="submit" />
                    </LoginForm>
                </LoginBox>
            </LoginContainer>
        </>
    )
}