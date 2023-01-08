import React, { useState } from 'react';
import { CirclePicker, CustomPicker, CirclePickerProps, ColorResult } from 'react-color';
import Popup from 'reactjs-popup';
import style from "./AppColorPicker.module.css";
import "./PopupSettings.css"

interface AppColorPickerProps extends CirclePickerProps{
  currentColor:string
}

const AppColorPicker = (props:AppColorPickerProps) => {

  const [currentColor, setCurrentColor] = useState(props.currentColor);

  const onColorChange = (val:ColorResult, e:React.ChangeEvent<HTMLInputElement>) =>{
    setCurrentColor(val.hex);
    props.onChange!(val, e);
  }

  return (
    <div className={style.color_picker_wrapper}>    
          <Popup contentStyle={style} className={"color_picker"} trigger={ <div style={{backgroundColor:currentColor}} className={style.color_preview}></div>} position="right center">
            <CirclePicker onChange={onColorChange}/>
          </Popup>
    </div>
  )
}

export default CustomPicker(AppColorPicker);
