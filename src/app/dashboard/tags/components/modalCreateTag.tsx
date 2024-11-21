import { useForm } from "react-hook-form";
import { CloseButton, RegisterBox, RegisterForm } from "@/app/global/styles/style"
import { InputButton, InputCustom, InputLabel } from "@/app/global/styles/style";
import closeButton from '../../../assets/svg/closeButton.svg'
import { Tag } from "@/app/entities/Tag";
import { TagsBox, TagsHeader } from "../style";
import { routeCreateTag } from "@/backend/tag";
import { toastSuccess } from "@/utils/toastify";

export function TagModal() {
    const { register, handleSubmit, formState: { errors } } = useForm<Tag>();
    function onSubmit(data: Tag) {
        routeCreateTag.request(data).then((tag) => {
            if(tag) {
                toastSuccess('Tag criada com sucesso!')
            }
        })

        //location.reload()
    }

    return (
        <TagsBox className="h-fit md:h-auto">
            <RegisterForm className="w-[80vw] gap-y-2 md:w-[80%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-col w-full justify-between items-start">
                            <InputLabel>Nome</InputLabel>
                            <InputCustom type="text" {...register("tag")}/>
                        </div>

                        {errors.tag && <span>This field is required</span>}
                    </div>

                    <div className="flex flex-col w-full justify-center">
                        <InputButton className="w-[50%] md:w-[30%]" type="submit">Adicionar</InputButton>
                    </div>
            </RegisterForm>
        </TagsBox>
    )
}