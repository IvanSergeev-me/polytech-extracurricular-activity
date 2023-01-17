import React, { ChangeEvent, useRef, useState } from 'react';
import { CommunityTypeShort, IPhoto } from '../../../Models/Activities';
import s_style from "./CommunitySettings.module.scss";
import style from "../CommunityPage.module.scss";
import "./PopupSettings.scss";
import { useFieldArray, useFormContext } from 'react-hook-form';
import Popup from 'reactjs-popup';

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
        <h3 className={style.subtitle}>Фото сообщества</h3>
        <button onClick={handleClick} className={s_style.add_button}><span>＋</span><p>Добавить</p></button>
        <input className={style.invisible_input} type="file" multiple={true} ref={filePicker} onChange={handleChange} accept="image/*,.png,.jpg"/>
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

type ChoosenFileProps = IPhoto & {
  deleteFile: (id:number) => void; 
  index:number;}

const ChoosenFile = (props:ChoosenFileProps) =>{

  const [isSelected, selectThis] = useState<boolean>(false);

  const { register, formState: { errors } } = useFormContext<CommunityTypeShort>();

  const existsCondition = errors.photos && errors.photos[props.index];

  return(
      <div onMouseEnter={()=> selectThis(true)} onMouseLeave={()=> selectThis(false)} className={s_style.choosen_files__container}>
          <img src={props.content} alt="choosen file" />
          {isSelected && 
            <div className={s_style.choosen_files__container__controls_screen}>
              <div className={s_style.controls_screen__cross}>
                  <span onClick={() => props.deleteFile(props.index)} >X</span>
              </div>
              <div className={s_style.controls_screen__text_box}>
                <Popup className={"photo_description"} trigger={<p className={s_style.text_box__text}>Нажмите, чтобы изменить описание</p>} position={'bottom center'}>
                  {(existsCondition && errors.photos![props.index]!.description?.type === 'maxLength') && <p className={style.field__error}>Слишком много символов</p>}
                  <textarea className={style.field__input + " " + style.resize_none} placeholder="Введите описание..." defaultValue={props.description}
                      {...register(`photos.${props.index}.description`, { required: false, maxLength:64 })}/>
                </Popup> 
              </div>
            </div>
          }
      </div>
  )
}


export default CommunityPhotos;