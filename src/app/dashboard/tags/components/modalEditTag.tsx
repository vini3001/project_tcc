import { useForm } from "react-hook-form";
import { CloseButton, RegisterBox, RegisterForm } from "@/app/global/styles/style"
import { InputButton, InputCustom, InputLabel } from "@/app/global/styles/style";
import closeButton from '../../../assets/svg/closeButton.svg'
import { Tag } from "@/app/entities/Tag";
import { routeEditTag } from "@/backend/tag";

interface TagProps {
    closeModal: () => void,
    tag: Tag | undefined
}

export function TagModal({closeModal, tag}: TagProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Tag>();
    function onSubmit(data: Tag) {
        routeEditTag.request(data)
    }

    function handleCloseModal() {
        closeModal()
    }

    return (
        <RegisterBox className="h-fit md:h-auto">
            <RegisterForm className="w-[80vw] gap-y-2 md:w-[30%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-2">
                        <InputCustom type="number" value={tag!.id} {...register("id")} hidden></InputCustom>
                        <div className="flex flex-col w-full justify-between items-start">
                            <InputLabel>Nome</InputLabel>
                            <InputCustom type="text" value={tag!.tag} {...register("tag")}/>
                        </div>

                        {errors.tag && <span>This field is required</span>}

                        <CloseButton onClick={handleCloseModal} src={closeButton.src}></CloseButton>
                    </div>

                    <div className="flex flex-col w-full justify-center">
                        <InputButton className="w-[50%] md:w-[30%]" type="submit">Editar</InputButton>
                    </div>
            </RegisterForm>
        </RegisterBox>
    )
}