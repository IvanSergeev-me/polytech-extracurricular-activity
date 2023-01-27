import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CommunityTypeShort, IContact } from '../../../../Models/Activities';
import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";

type ContactFormProps = IContact & {handleDelete:(id:number)=>void; index:number; fieldsType:string;}

const ContactFormWrapper = ({contact,name,id,type,handleDelete,index,fieldsType}:ContactFormProps) => {
  return (
    <div className={s_style.contacts_form_wrapper}>
      <ContactForm fieldsType={fieldsType} handleDelete={handleDelete} contact={contact} index={index} id={id} type={type} name={name}/>
    </div>
  )
}

const ContactForm = ({contact, name, fieldsType, id, type, index, handleDelete}:ContactFormProps) => {

  const { register,  formState: { errors } } = useFormContext<CommunityTypeShort>();

  const handleContactDelete = () =>{
    handleDelete(index);
  }

  //Костыль. Я не жалею.
  const typeCondition = fieldsType === "links";
  const errorArr = typeCondition? errors.links: errors.contacts;

  const existsCondition = errorArr && errorArr[index];

  return (
    <div className={s_style.contacts_form_wrapper__contacts_form}>
      <div className={s_style.contacts_form__contact_field_group}>
        <div className={s_style.contact_field_group__heading}>
            <h3 className={style.subtitle_min}>{typeCondition?"Имя ссылки":"Имя контакта"}</h3>
            <div className={style.form__controls}><p onClick={handleContactDelete}>удалить</p></div>
        </div>
        <div className={style.form__field}>
          {(existsCondition && errorArr ![index]!.name?.type === 'required') && <p className={style.field__error}>Это поле обязательно</p>}
          {(existsCondition && errorArr ![index]!.name?.type === 'maxLength') && <p className={style.field__error}>Слишком много символов</p>}
          <input 
            className={style.field__input} 
            placeholder="Введите имя контакта..." 
            type="text" 
            defaultValue={name} 
            {...register(typeCondition?
              `links.${index}.name`:
              `contacts.${index}.name`, 
              { required: true, maxLength:24 })}/>
        </div>
      </div>
      <div className={s_style.contacts_form__contact_field_group}>
        <div className={s_style.contact_field_group__heading}>
            <h3 className={style.subtitle_min}>{typeCondition?"Ссылка":"Контакт"}</h3>
        </div>
        <div className={style.form__field}>
          {(existsCondition && errorArr ![index]!.contact?.type === 'required') && <p className={style.field__error}>Это поле обязательно</p>}
          {(existsCondition && errorArr ![index]!.contact?.type === 'maxLength') && <p className={style.field__error}>Слишком много символов</p>}
          <input 
            className={style.field__input} 
            placeholder="Введите контакт..." 
            type="text" 
            defaultValue={contact} 
            {...register(typeCondition?
              `links.${index}.contact`:
              `contacts.${index}.contact`,
              { required: true, maxLength:24 })}/>
        </div>
      </div>   
    </div>
  )
}

export default ContactFormWrapper;
