import { User } from "@/app/entities/User";
import { CloseButton, InputButton, InputCustom, InputLabel, RegisterBox, RegisterForm, SelectStyle } from "@/app/global/styles/style";
import { useForm } from "react-hook-form";
import closeButton from '@/app/assets/svg/closeButton.svg'
import { useSearchParams } from "next/navigation";
import { routeEditUser } from "@/backend/user";
import { useAuth } from "@/app/contexts/AuthContext";

interface UserProps {
    closeModal: () => void
    userIdInput: number | undefined
}

export default function ModalUser({closeModal, userIdInput}: UserProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const {userId} = useAuth()
    const searchParams = useSearchParams()

    const clientId = parseInt(searchParams.get('id') as string)

    async function onSubmit(data: User) {
        const response = await routeEditUser.request(data)

        console.log(response.httpCode)
    }

    function handleCloseModal() {
        closeModal()
    }

    return (
        <RegisterBox className="h-fit md:h-auto">
                    <RegisterForm className="w-[80vw] gap-y-2 md:w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Nome</InputLabel>
                                    <InputCustom type="text" {...register("nome")}/>
                                </div>

                                {errors.nome && <span>This field is required</span>}
                            
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Email</InputLabel>
                                    <InputCustom type="email" {...register("email")}/>
                                </div>

                                <CloseButton onClick={handleCloseModal} src={closeButton.src}></CloseButton>

                                {errors.email && <span>This field is required</span>}

                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Nível</InputLabel>
                                    <SelectStyle {...register("nivel")}>
                                        <option value={'adm'}>Administrador</option>
                                        <option value={'user'}>Usuário</option>
                                    </SelectStyle>
                                </div>  

                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Senha</InputLabel>
                                    <InputCustom type="text" {...register("password")}/>
                                </div>  
                            </div>

                            {/* Inputs default*/}
                            <InputCustom type="number" value={userIdInput} {...register("id")} hidden={true}/>
                            <InputCustom type="number" value={clientId} {...register("id_cliente")} hidden={true}/> 
                            <InputCustom type="number" value={userId} {...register("id_by")} hidden={true}/> 
                            <InputCustom type="text" value={'c'} {...register("tipo")} hidden={true}/>
                            <InputCustom type="number" value={1} {...register("status")} hidden={true}/>

                            <div className="flex flex-col w-full justify-center">
                                <InputButton className="w-[50%] md:w-[30%]" type="submit">Registrar</InputButton>
                            </div>
                    </RegisterForm>
            </RegisterBox>
    )
}