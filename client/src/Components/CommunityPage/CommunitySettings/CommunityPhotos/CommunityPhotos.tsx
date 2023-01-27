import React, { ChangeEvent, useRef } from 'react';
import { CommunityTypeShort, IPhoto } from '../../../../Models/Activities';
import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";
import "./PopupSettings.scss";
import { useFieldArray, useFormContext } from 'react-hook-form';
import ChoosenFile from './ChoosenFIle';

const CommunityPhotos= () => {

    const { control } = useFormContext<CommunityTypeShort>();
    
    const { fields, append, remove } = useFieldArray({
      control,
      name: "photos"
    });

    const deleteFile = (id:number) =>{
      remove(id);
    }

    const filePicker = useRef<HTMLInputElement>(null);
    const handleClick = async (e:any) =>{
        if(filePicker.current!==null) {
            filePicker.current.click();
        }
        
        e.preventDefault();
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      let files = e.target.files;
      if(files){
        for(let i = 0; i < files?.length!; i++){
          append({content:URL.createObjectURL(files[i]), id:(files.length+i), description:""} as IPhoto)
        }
      }
    }

    return (
      <div className={s_style.settings_left__settings_photos_container}>
        <h3 className={style.subtitle_min}>Фото сообщества</h3>
        <div className={s_style.settings_photos_container__controls}>
          <button onClick={handleClick} className={s_style.add_button}><span>＋</span><p>Добавить</p></button>
          <input className={style.invisible_input} type="file" multiple={true} ref={filePicker} onChange={handleChange} accept="image/*,.png,.jpg"/>
        </div>
        <div className={s_style.settings_photos_container__settings_photos}>
          {fields.map((p,index) => <ChoosenFile
                        description={p.description}
                        deleteFile={deleteFile}
                        key={p.id} id={p.id} content={p.content} 
                        index={index} />)}
        </div>
      </div>
  )
}




export default CommunityPhotos;