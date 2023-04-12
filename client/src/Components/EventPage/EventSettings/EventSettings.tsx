import React from 'react';
import s_style from "./EventSettings.module.scss";
import style from "../EventPage.module.scss";
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { eventSelector } from 'Selectors';
import { CompareDates } from 'Assets/Utils/CompareDates';
import DateTimeForm from './DateTimeForm/DateTimeForm';


const EventSettings = () => {

  const { info } = useTypedSelector(eventSelector);

  const isOver = !CompareDates(info.date);

  return (
    <div className={style.event_page_container__main_content}>
      <h1 className={style.title}>Настройка</h1>
      <div className={s_style.main_content__date_settings}>
        <h2 className={style.subtitle}>Дата проведения мероприятия</h2>
        <DateTimeForm info={info} isOver={isOver} />
      </div>
      <div className={s_style.main_content__info_settings}>
        <h2 className={style.subtitle}>Информация о мероприятии</h2>
      </div>
    </div>
  )
}

export default EventSettings;
