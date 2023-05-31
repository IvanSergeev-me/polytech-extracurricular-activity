import React from 'react';
import Popup from 'reactjs-popup';
import "./AddAchievement.scss";

type PopupProps ={
    trigger: JSX.Element;
}

const AddAchievementPopup = ({trigger}:PopupProps) => {
  return (
    <Popup className='add_modal' modal={true} trigger={trigger}>
        <div className='content__add_wrapper'>
            добавление
        </div>
    </Popup>
  )
}

export default AddAchievementPopup;
