import React from 'react';
import {  RoleAndMembers, RoleRightName, RolesRightsNames } from "Models/RolesAndRights";
import { FormProvider, useForm } from "react-hook-form";
import style from "../../CommunityPage.module.scss";
import ro_style from "../CommunityRoles.module.scss";
import { IMemberShort } from 'Models/User';
import ToggleRights from './ToggleRights';
import Members from './Members';

type FormProps = {closePopup:()=>void;} & RoleAndMembers

export type FormType = { id:number; members:IMemberShort[]; name:string; rights:boolean[];}

const EditRoleForm = ({ id, members, name, rights, closePopup }: FormProps) => {

    const methods = useForm< FormType>({defaultValues:{
            id, members, name, 
            rights: Object.keys(RolesRightsNames).map(r=> rights.includes(r as RoleRightName)),
        }
    });

    const deleteRole = () =>{
        
    }

    const { register, handleSubmit, reset, formState: { errors } } = methods;

    const onSubmit = (data: FormType ) =>{

        const rightsNames = Object.keys(RolesRightsNames);

        const rightsResult = [];

        for (let index = 0; index < data.rights.length; index++) {
            if(data.rights[index]){
                rightsResult.push(rightsNames[index]);
            }
        }

        const dataResult = {
            ...data,
            rights:rightsResult,
        }

        console.log(dataResult)

        reset(); 
    }

    const closeModal = () =>{closePopup()}

    return (
        <FormProvider {...methods}>
            <form className={ro_style.role_form_container} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form__field}>
                    <div className={style.field__title_controls}>
                        <h3>Название роли</h3>
                        <div className={style.form__controls}>
                            <p onClick={closeModal}>Закрыть</p>
                        </div>
                    </div>
                    {(errors.name && errors.name.type==="required") && <p className={style.field__error}>Данное поле обязательно</p>}
                    {(errors.name && errors.name.type==="maxLength") && <p className={style.field__error}>Слишком много символов</p>}
                    <input className={style.field__input} {...register("name", { required: true, maxLength: 25 })}
                        placeholder={"Название роли..."} />
                </div>
                <ToggleRights rights={rights}/>
                <Members rolename={name}/>
                <div className={ro_style.role_form_container__buttons}>
                    <button className={ro_style.blu_btn} type="submit">Сохранить</button>
                    <button className={ro_style.red_btn} onClick={deleteRole}> Удалить</button>
                </div>
            </form>
        </FormProvider>
    )
}

export default EditRoleForm;