import React from 'react';
import Popup from 'reactjs-popup';
import "./AchievementInfo.scss";

type PopupProps ={
    trigger: JSX.Element;
    achievementId:number;
}

const AchievementInfo = ({trigger,achievementId}:PopupProps) => {
  return (
    <Popup className='achievement_modal' modal={true} trigger={trigger}>
        <div className='content__add_wrapper'>
            инфо
        </div>
    </Popup>
  )
}

export default AchievementInfo;
