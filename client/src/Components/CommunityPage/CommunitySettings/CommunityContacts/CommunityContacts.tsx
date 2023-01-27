import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { CommunityTypeShort, IContact } from '../../../../Models/Activities';
import CommunityContactForm from './CommunityContactForm';
import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";

const CommunityContacts = () => {

    const fieldsType = "contacts";

    const { control, getValues } = useFormContext<CommunityTypeShort>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: fieldsType
      });

    const {contacts} = getValues();

    const handleAddLink = () =>{
        if(contacts.every( t => t.name )){
            append({id:(contacts.length+1), contact:"", type:"contact" , name:""} as IContact);
        }
    }
    const handleDelete = (index:number) =>{
        if(contacts.length!==1){
            remove(index);
        }
        else{
            remove(index);
            append({id:(contacts.length+1), contact:"", type:"contact" , name:""} as IContact);
        }
    }

    return (
        <div className={s_style.settings_right__settings_links_container}>
            <h3 className={style.subtitle_min}>Ссылки</h3>
            <button className={s_style.add_button} onClick={handleAddLink}><span>＋</span><p>Добавить</p></button>
            <div className={s_style.settings_links_container__settings_links}>
                {fields.map((c,index) => <CommunityContactForm
                    fieldsType={fieldsType}
                    handleDelete={handleDelete} 
                    key={c.id} 
                    id={c.id} 
                    name={c.name} 
                    contact={c.contact}
                    type={c.type}
                    index={index} />)}
            </div>
        </div>
  )
}



export default CommunityContacts;