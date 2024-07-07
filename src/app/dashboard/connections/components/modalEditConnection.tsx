import { Connection } from "@/app/entities/Connection";
import { CloseButton, InputButton, InputCustom, InputLabel, RegisterBox, RegisterForm } from "@/app/global/styles/style";
import { useForm } from "react-hook-form";
import closeButton from '../../../assets/svg/closeButton.svg'

interface ConnectionProps {
    closeModal: () => void
    connectionId: number | undefined
}

export function ConnectionModal({closeModal, connectionId}: ConnectionProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Connection>();
    function onSubmit(data: Connection) {}

    function handleCloseModal() {
        closeModal()
    }

    const newDate = new Date().toString()

    return (
        <RegisterBox className="h-fit md:h-auto">
                    <RegisterForm className="w-[80vw] gap-y-2 md:w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Nome</InputLabel>
                                    <InputCustom type="text" {...register("nome")}/>
                                </div>

                                {errors.nome && <span>This field is required</span>}

                                <CloseButton onClick={handleCloseModal} src={closeButton.src}></CloseButton>

                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Status</InputLabel>
                                    <InputCustom type="text" {...register("status")}/>
                                </div>

                                {errors.status && <span>This field is required</span>}

                                <div className="flex flex-col justify-between items-start">
                                    <InputLabel>Sessão</InputLabel>
                                    <InputCustom type="text" {...register("sessao")}/>
                                </div>  

                                {errors.sessao && <span>This field is required</span>}   
                            </div>
                                <InputCustom type="date" hidden={true} value={newDate} {...register("ultima_atualizacao")}/>

                            <div className="flex flex-col w-full justify-center">
                                <InputButton className="w-[50%] md:w-[30%]" type="submit">Editar</InputButton>
                            </div>
                    </RegisterForm>
            </RegisterBox>
    )
}