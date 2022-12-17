import React, {FC, useMemo, useRef, useState} from "react";
import { withCommunityRights } from "../../HOC/withCommunityRights";
import style from "../CommunityPage.module.css";
import { useForm } from "react-hook-form";
import { useCommunityActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectUserId } from "../../../Selectors";
import { IPublicationImage } from "../../../Models/Community";
import { getCurrentDate } from "../../../Assets/Utils/getCurrentDate";
import { rolesRightsNames } from "../../../Models/RolesAndRights";

type AddPublicationFormValues = {
    title:string;
    text:string;
    images?:[];
}

const AddPublicationForm:FC = (props) =>{

    const {addPost} = useCommunityActions();
    const currentDate = useMemo(()=>getCurrentDate(),[]);
    const userId = useTypedSelector(selectUserId);
    const [files, setFiles] = useState<File[]>([])

    // eslint-disable-next-line
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm< AddPublicationFormValues >();

    let newPostImages = useMemo(()=>getImages(files),[files]);

    const onSubmit = (data: AddPublicationFormValues ) =>{

        let newPost = {id:5,images:newPostImages, title:data.title, text:data.text, authorId:userId!, date:currentDate};
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
        <div className={style.add_publication_form_container}>
             <form className={style.add_publication_form_container__form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Заголовок публикации</h3>
                    {errors.title && <p className={style.field__error}>{errors.title.message}</p>}
                    <input className={style.field__input} defaultValue="" {...register("title",{ required: true, maxLength: 25 })} 
                        placeholder={"Заголовок публикации..."}/>
                </div>
                <div className={style.from__field}>
                    <h3 className={style.field__title}>Содержание публикации</h3>
                    {errors.text && <p className={style.field__error}>{errors.text.message}</p>}
                    <textarea className={style.field__input + " " + style.resize_none} defaultValue="" {...register("text", { required: true, maxLength: 250 })} 
                        placeholder={"Текст публикации..."}/>
                </div>
                <PostsFilePicker onFilesChange={onFilesChange} deleteFile={deleteFile} files={files}/>
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
        <div className={style.from__photos__container}>
            <div className={style.from__photos__container__heading}>
                <h3 className={style.field__title}>Фото сообщества</h3>
                <button onClick={handleClick} className={style.add_photo_button}>＋ Добавить</button>
                <input className={style.invisible_input} type="file" multiple={true} ref={filePicker} onChange={handleChange} accept="image/*,.png,.jpg"/>
            </div>
            <div className={style.from__photos__container__choosen_files}>
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
        <div onMouseEnter={()=> selectThis(true)} onMouseLeave={()=> selectThis(false)} className={style.choosen_files__container}>
            <img src={props.image} alt="choosen file" />
            {isSelected && <div className={style.choosen_files__container__cross}><span onClick={() => props.deleteFile(props.id)} >X</span></div>}
        </div>
    )
}

export default withCommunityRights(AddPublicationForm, [rolesRightsNames.canEditPost]);



export const getImages = (files:File[]) =>{
    let newPostImages = [] as IPublicationImage[];

    if(files.length!==0){
        for (let i = 0; i<files.length; i++){
            let fileImage = {id:i, image:URL.createObjectURL(files[i])}
            newPostImages.push(fileImage)
        }
    }
    return newPostImages;
}