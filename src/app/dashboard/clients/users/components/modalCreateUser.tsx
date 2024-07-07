import { User } from "@/app/entities/User";
import { CloseButton, InputButton, InputCustom, InputLabel, RegisterBox, RegisterForm } from "@/app/global/styles/style";
import { useForm } from "react-hook-form";
import closeButton from '@/app/assets/svg/closeButton.svg'
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

interface UserProps {
    closeModal: () => void
}

export default function ModalUser({closeModal}: UserProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const searchParams = useSearchParams()
    const {userId} = useAuth()

    const clientId = parseInt(searchParams.get('id') as string)

    async function onSubmit(data: User) {
        //const response = await routeCreateClient.request(data)
    }

    function handleCloseModal() {
        closeModal()
    }

    return (
        <RegisterBox className="h-fit md:h-auto">
                    <RegisterForm className="w-[80vw] gap-y-2 md:w-[55vw]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-2">
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
                            </div>

                            <div className="flex flex-col md:flex-row gap-2">

                                <div className="flex flex-col md:w-[40%] justify-between items-start">
                                    <InputLabel>Senha</InputLabel>
                                    <InputCustom type="text" {...register("password")}/>
                                </div>  
                            </div>

                            {/* Inputs default*/}
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