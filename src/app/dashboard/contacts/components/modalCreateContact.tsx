import { useForm } from "react-hook-form";
import { CloseButton, RegisterBox, RegisterForm } from '@/app/global/styles/style';
import { Contact } from "@/app/entities/Contact";
import { InputButton, InputCustom, InputLabel } from "@/app/global/styles/style";
import closeButton from '../../../assets/svg/closeButton.svg'

interface ContactProps {
    closeModal: () => void
}

export function ContactModal({closeModal}: ContactProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Contact>();
    function onSubmit(data: Contact) {}

    function handleCloseModal() {
        closeModal()
    }
    
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
                                    <InputLabel>Email</InputLabel>
                                    <InputCustom type="email" {...register("email")}/>
                                </div>

                                {errors.email && <span>This field is required</span>}

                                <div className="flex flex-col justify-between items-start">
                                    <InputLabel>Celular</InputLabel>
                                    <InputCustom type="tel" {...register("celular")}/>
                                </div>  

                                {errors.celular && <span>This field is required</span>}   
                            </div>

                            <div className="flex flex-col w-full justify-center">
                                <InputButton className="w-[50%] md:w-[30%]" type="submit">Editar</InputButton>
                            </div>
                    </RegisterForm>
            </RegisterBox>
    )
}