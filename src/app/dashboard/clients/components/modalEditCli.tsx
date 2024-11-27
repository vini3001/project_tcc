'use client'

import { CloseButton, RegisterBox, RegisterForm } from '@/app/global/styles/style'
import { User } from "../../../entities/User";
import { useForm } from "react-hook-form";
import { InputButton, InputCustom, InputLabel, SelectStyle } from "@/app/global/styles/style";
import closeButton from '../../../assets/svg/closeButton.svg'
import { routeEditClient, routeGetClient } from "@/backend/client";
import { Client } from '@/app/entities/Client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Loading } from '@/app/components/Loading';
import { toastError, toastSuccess } from '@/utils/toastify';

type Inputs = Client

interface ClientProps {
    closeModal: () => void
}

export default function ClientModal({closeModal}: ClientProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [client, setClient] = useState<Client>()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    function onSubmit(data: Inputs) {routeEditClient.request(data).then(() => {
        toastSuccess('Cliente editsado com sucesso!')
        setInterval(() => {location.reload()}, 2000)
    }).catch(() => {
        toastError('Falha ao editar cliente!')
        setInterval(() => {location.reload()}, 2000)
    })
    }

    const searchParams = useSearchParams()

    const clientId = parseInt(searchParams.get('id') as string)

    useQuery({queryKey: 'getClient', queryFn: async () => {
        await routeGetClient.request({id: clientId}).then((item) => {
            item !== undefined && setClient(item.data)
            setIsLoading(false)
        })
    }})

    function handleCloseModal() {
        closeModal()
    }

    return (
            <RegisterBox className="h-fit md:h-auto">
                    {!isLoading ? 
                        <RegisterForm className="w-[80vw] gap-y-2 md:w-[55vw]" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row gap-2">
                                    <InputCustom type="number" value={clientId} {...register("id")} hidden={true}></InputCustom>
                                    <div className="flex flex-col w-full justify-between items-start">
                                        <InputLabel>Nome</InputLabel>
                                        <InputCustom type="text" {...register("nome")} defaultValue={client?.nome}/>
                                    </div>
    
                                    {errors.nome && <span>This field is required</span>}
                                
                                    <div className="flex flex-col w-full justify-between items-start">
                                        <InputLabel>Email</InputLabel>
                                        <InputCustom type="email" {...register("email")} defaultValue={client?.email}/>
                                    </div>
    
                                    <CloseButton onClick={handleCloseModal} src={closeButton.src}></CloseButton>
    
                                    {errors.email && <span>This field is required</span>}
                                </div>
    
                                <div className="flex flex-col md:flex-row gap-2">
    
                                    <div className="flex flex-col md:w-[40%] justify-between items-start">
                                        <InputLabel>Documento</InputLabel>
                                        <InputCustom type="text" {...register("documento")} defaultValue={client?.documento}/>
                                    </div>  
    
                                    <div className="flex flex-col md:w-[40%] justify-between items-start">
                                        <InputLabel>Telefone</InputLabel>
                                        <InputCustom type="text" {...register("telefone")} defaultValue={client?.telefone}/>
                                    </div>  
    
                                    <div className="flex flex-col md:w-[30%] justify-between items-start">
                                        <InputLabel>Tipo pessoa</InputLabel>
                                        <SelectStyle id="typePerson" {...register("tipo_pessoa")} defaultValue={client?.tipo_pessoa}>
                                            <option value="física">física</option>
                                            <option value="jurídica">jurídica</option>
                                        </SelectStyle>
                                    </div>  
                                </div>
    
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="flex flex-col md:w-[40%] justify-between items-start">
                                        <InputLabel>Cidade</InputLabel>
                                        <InputCustom type="text" {...register("cidade")} defaultValue={client?.cidade}/>
                                    </div>  
    
                                    <div className="flex flex-col md:w-[30%] justify-between items-start">
                                        <InputLabel>Bairro</InputLabel>
                                        <InputCustom type="text" {...register("bairro")} defaultValue={client?.bairro}/>
                                    </div>  
    
                                    <div className="flex flex-col md:w-[30%] justify-between items-start">
                                        <InputLabel>Logradouro</InputLabel>
                                        <InputCustom type="text" {...register("logradouro")} defaultValue={client?.logradouro}/>
                                    </div>
                                </div>   
    
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="flex flex-col md:w-[10%] justify-between items-start">
                                        <InputLabel>N°</InputLabel>
                                        <InputCustom type="text" {...register("numero")} defaultValue={client?.numero}/>
                                    </div>
    
                                    <div className="flex flex-col md:w-[20%] justify-between items-start">
                                        <InputLabel>CEP</InputLabel>
                                        <InputCustom type="text" {...register("cep")} defaultValue={client?.cep}/>
                                    </div>
    
                                    <div className="flex flex-col md:w-[10%] justify-between items-start">
                                        <InputLabel>UF</InputLabel>
                                        <InputCustom type="text" {...register("uf")} defaultValue={client?.uf}/>
                                    </div>
    
                                    <div className="flex flex-col md:w-[30%] justify-between items-start">
                                        <InputLabel>Complemento</InputLabel>
                                        <InputCustom type="text" {...register("complemento")} defaultValue={client?.complemento}/>
                                    </div>
                                </div>
    
                                <div className="flex flex-col w-full justify-center">
                                    <InputButton className="w-[50%] md:w-[30%]" type="submit">Editar</InputButton>
                                </div>
                        </RegisterForm>
                     : <Loading isLoading={true}/>}
            </RegisterBox>
    )
}