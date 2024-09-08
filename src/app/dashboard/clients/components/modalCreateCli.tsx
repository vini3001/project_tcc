'use client'

import { CloseButton, RegisterBox, RegisterForm } from '@/app/global/styles/style';
import { useAuth } from "@/app/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { InputButton, InputCustom, InputLabel, SelectStyle } from "@/app/global/styles/style";
import closeButton from '../../../assets/svg/closeButton.svg'
import { routeCreateClient } from '@/backend/client';
import { Client } from '@/app/entities/Client';

interface ClientProps {
    closeModal: () => void
}

type Inputs = Client

export default function ClientModal({closeModal}: ClientProps) {
    const { userId, token } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<Client>();

    async function onSubmit(data: Inputs) {
        const response = await routeCreateClient.request(data)
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
                                    <InputLabel>Documento</InputLabel>
                                    <InputCustom type="text" {...register("documento")}/>
                                </div>  

                                <div className="flex flex-col md:w-[40%] justify-between items-start">
                                    <InputLabel>Telefone</InputLabel>
                                    <InputCustom type="text" {...register("telefone")}/>
                                </div>  

                                <div className="flex flex-col md:w-[30%] justify-between items-start">
                                    <InputLabel>Tipo pessoa</InputLabel>
                                    <SelectStyle id="typePerson" {...register("tipo_pessoa")}>
                                        <option value="física">física</option>
                                        <option value="jurídica">jurídica</option>
                                    </SelectStyle>
                                </div>  
                            </div>

                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex flex-col md:w-[40%] justify-between items-start">
                                    <InputLabel>Cidade</InputLabel>
                                    <InputCustom type="text" {...register("cidade")}/>
                                </div>  

                                <div className="flex flex-col md:w-[30%] justify-between items-start">
                                    <InputLabel>Bairro</InputLabel>
                                    <InputCustom type="text" {...register("bairro")}/>
                                </div>  

                                <div className="flex flex-col md:w-[30%] justify-between items-start">
                                    <InputLabel>Logradouro</InputLabel>
                                    <InputCustom type="text" {...register("logradouro")}/>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="flex flex-col md:w-[10%] justify-between items-start">
                                    <InputLabel>N°</InputLabel>
                                    <InputCustom type="text" {...register("numero")}/>
                                </div>

                                <div className="flex flex-col md:w-[20%] justify-between items-start">
                                    <InputLabel>CEP</InputLabel>
                                    <InputCustom type="text" {...register("cep")}/>
                                </div>

                                <div className="flex flex-col md:w-[10%] justify-between items-start">
                                    <InputLabel>UF</InputLabel>
                                    <InputCustom type="text" {...register("uf")}/>
                                </div>

                                <div className="flex flex-col md:w-[30%] justify-between items-start">
                                    <InputLabel>Complemento</InputLabel>
                                    <InputCustom type="text" {...register("complemento")}/>
                                </div>
                            </div>

                            <InputCustom type="text" value={userId} {...register("id_by")} hidden={true}/>

                            <div className="flex flex-col w-full justify-center">
                                <InputButton className="w-[50%] md:w-[30%]" type="submit">Registrar</InputButton>
                            </div>
                    </RegisterForm>
            </RegisterBox>
    )
}