import React from 'react';
import style from "./FilePicker.module.css";


interface FilePickerProps{
    onFilesChange: (files:File[]) => void;
    files:File[];
    isMultiply:boolean;
    accept:string;
}

export const FilePicker = React.forwardRef< HTMLInputElement ,FilePickerProps>(( props, ref) => {

    const handleChange = (e:any) => {
        props.onFilesChange([...props.files, ...e.target.files ])
    }

    return (
        <input className={style.invisible_input} type="file" multiple={props.isMultiply} ref={ref} onChange={handleChange} accept={props.accept}/>
    )
})
