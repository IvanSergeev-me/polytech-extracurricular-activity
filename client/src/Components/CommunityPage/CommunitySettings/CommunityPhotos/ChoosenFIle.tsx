import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Popup from "reactjs-popup";
import { CommunityTypeShort, IPhoto } from "../../../../Models/Activities";
import style from "../../CommunityPage.module.scss";
import s_style from "../CommunitySettings.module.scss";
import "./PopupSettings.scss";

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
                  <Popup className={"photo_description"} 
                    modal={true} 
                    trigger={<p className={s_style.text_box__text}>Нажмите, чтобы изменить описание</p>} 
                    position={'bottom center'}>
                      <p className={style.subtitle}>Изменить описание</p>
                      {(existsCondition && errors.photos![props.index]!.description?.type === 'maxLength') && 
                        <p className={style.field__error}>Слишком много символов</p>}
                        <textarea className={style.field__input + " " + style.resize_none} 
                                  placeholder="Введите описание..." 
                                  defaultValue={props.description}
                                  {...register(`photos.${props.index}.description`, { required: false, maxLength:64 })}/>
                  </Popup> 
                </div>
              </div>
            }
        </div>
    )
  }
export default ChoosenFile;