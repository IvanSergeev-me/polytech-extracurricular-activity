import React, {FC, useRef, useState} from "react";
import { withCommunityRights } from "../../HOC/withCommunityRights";
import style from "../CommunityPage.module.scss";
import p_style from "./CommunityPosts.module.css";
import { Controller, useForm } from "react-hook-form";
import { useCommunityActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectUserId } from "../../../Selectors";
import { rolesRightsNames } from "../../../Models/RolesAndRights";
import { useCurrentDate } from "../../../Hooks/useCurrentDate";
import { useGetImages } from "../../../Hooks/useGetImages";
import Textarea from "../../Common/Textarea/Textarea";

type AddPublicationFormValues = {
    title:string;
    text:string;
    images?:[];
}

const AddPublicationForm:FC = (props) =>{

    const {addPost} = useCommunityActions();
    const currentDate = useCurrentDate();
    const userId = useTypedSelector(selectUserId);
    const [files, setFiles] = useState<File[]>([]);

    const { register, control, handleSubmit, reset, formState: { errors } } = useForm< AddPublicationFormValues >();

    let newPostImages = useGetImages(files);

    const onSubmit = (data: AddPublicationFormValues ) =>{

        let newPost = {id:0,images:newPostImages, title:data.title, text:data.text, authorId:userId!, date:currentDate};
        addPost(newPost);
        setFiles([] as File[]);
        reset(); 
    }

    const onFilesChange = (files:File[]) =>{
        setFiles(files);
    }

    const deleteFile = (id:number) =>{
        let newFiles = files.filter(obj => files.indexOf(obj) !== id)
        setFiles(newFiles);
    }
    
    return(
        <div className={p_style.add_publication_form_container}>
             <form className={p_style.add_publication_form_container__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form__field}>
                    <h3 className={style.field__title}>Заголовок публикации</h3>
                    {errors.title && <p className={style.field__error}>{errors.title.message}</p>}
                    <input className={style.field__input} defaultValue="" {...register("title",{ required: true, maxLength: 25 })} 
                        placeholder={"Заголовок публикации..."}/>
                </div>
                <div className={style.form__field}>
                    {errors.text && <p className={style.field__error}></p>}
                    <Controller
                        name="text"
                        control={control}
                        rules={{ maxLength:256 }}
                        render={ ({field: {value, onChange } }) =>
                            <Textarea 
                                value={value}
                                onChange={val=> onChange(val)}
                                placeholder={"Текст публикации..."}
                                errorMessage={errors.text && errors.text.message}
                                title={"Содержание публикации"} 
                                />
                    }/>
                </div>
                <Controller
                        name="images"
                        control={control}
                        render={({field: { onChange } }) => <PostsFilePicker onFilesChange={val=>{
                            onChange(val)
                            onFilesChange(val)}
                        } deleteFile={deleteFile} files={files}/>}
                        />
                
                <div className={style.form__submit}>
                    <button type="submit" className={style.submit__button}>Опубликовать</button>
                </div>
            </form>
        </div>
    )
}

interface PostsFilePickerProps{
    onFilesChange: (files:File[]) => void;
    files:File[];
    deleteFile:(id:number) => void;
}

export const PostsFilePicker:FC<PostsFilePickerProps> = (props) =>{

    const filePicker = useRef<HTMLInputElement>(null);
    const handleClick = async (e:any) =>{
        if(filePicker.current!==null) {
            filePicker.current.click();
        }
        
        e.preventDefault();
    }

    const handleChange = (e:any) => {
        props.onFilesChange([...props.files, ...e.target.files])
    }

    return(
        <div className={p_style.form__photos__container}>
            <div className={p_style.form__photos__container__heading}>
                <h3 className={style.field__title}>Фото сообщества</h3>
                <button onClick={handleClick} className={p_style.add_photo_button}>＋ Добавить</button>
                <input className={style.invisible_input} type="file" multiple={true} ref={filePicker} onChange={handleChange} accept="image/*,.png,.jpg"/>
            </div>
            <div className={p_style.form__photos__container__choosen_files}>
                {props.files.map((file, index) => <ChoosenFile deleteFile={props.deleteFile} id={index} key={index} image={URL.createObjectURL(file)}/>)}
            </div>
        </div>
    )
}

interface ChoosenFileProps{
    image:string;
    id:number;
    deleteFile: (id:number) => void;
}

const ChoosenFile:FC<ChoosenFileProps> = (props) =>{

    const [isSelected, selectThis] = useState<boolean>(false);

    return(
        <div onMouseEnter={()=> selectThis(true)} onMouseLeave={()=> selectThis(false)} className={p_style.choosen_files__container}>
            <img src={props.image} alt="choosen file" />
            {isSelected && <div className={p_style.choosen_files__container__cross}><span onClick={() => props.deleteFile(props.id)} >X</span></div>}
        </div>
    )
}

export default withCommunityRights(AddPublicationForm, [rolesRightsNames.canEditPost]);



