import { InputButton, InputCustom, InputLabel, CloseButton, RegisterBox, RegisterForm } from "@/app/global/styles/style";
import { Contact } from "@/app/entities/Contact";
import { useForm } from "react-hook-form";
import closeButton from '../../../assets/svg/closeButton.svg'
import { routeEditContact } from "@/backend/contact";
import { toastError, toastSuccess } from "@/utils/toastify";

interface ContactProps {
    closeModal: () => void
    contact: Contact | undefined
}

export default function ContactModal({closeModal, contact}: ContactProps){
    const { register, handleSubmit, formState: { errors } } = useForm<Contact>();
    function onSubmit(data: Contact) {
        routeEditContact.request(data).then(() => {
            toastSuccess('Contato editado com sucesso!')
            setInterval(() => {}, 1000)
            location.reload()
        }).catch(() => {
            toastError('Falha ao editar contato!')
            setInterval(() => {}, 1000)
            location.reload()
        })
    }

    function handleCloseModal() {
        closeModal()
    }

    return (
        <RegisterBox className="h-fit md:h-auto">
                    <RegisterForm className="w-[80vw] gap-y-2 md:w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Nome</InputLabel>
                                    <InputCustom defaultValue={contact!.nome} type="text" {...register("nome")}/>
                                </div>

                                {errors.nome && <span>This field is required</span>}

                                <CloseButton onClick={handleCloseModal} src={closeButton.src}></CloseButton>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col w-full justify-between items-start">
                                    <InputLabel>Email</InputLabel>
                                    <InputCustom defaultValue={contact!.email}  type="email" {...register("email")}/>
                                </div>

                                {errors.email && <span>This field is required</span>}

                                <div className="flex flex-col justify-between items-start">
                                    <InputLabel>Celular</InputLabel>
                                    <InputCustom defaultValue={contact!.celular}  type="tel" {...register("celular")}/>
                                </div>  
                                <InputCustom defaultValue={contact!.id_cliente}  type="number" {...register("id_cliente")} hidden={true}/>    
                                <InputCustom defaultValue={contact!.id}  type="number" {...register("id")} hidden={true}/>    
                                <InputCustom defaultValue={contact!.data_registro}  type="datetime-local" {...register("data_registro")} hidden={true}/>    
                                <InputCustom defaultValue={contact!.tags[0]}  type="text" {...register("tags")} hidden={true}/>  
                                {errors.celular && <span>This field is required</span>}   
                            </div>

                            <div className="flex flex-col w-full justify-center">
                                <InputButton className="w-[50%] md:w-[30%]" type="submit">Editar</InputButton>
                            </div>
                    </RegisterForm>
            </RegisterBox>
    )
}