import React, { SyntheticEvent } from 'react';
import style from "../EventPage.module.scss";
import r_style from "./EventRequests.module.scss";
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { eventSelector } from 'Selectors';
import { IJoinRequest } from 'Models/Community';

const EventRequests = () => {
  const { joinRequests } = useTypedSelector(eventSelector);

  const onAcceptAllClick = (e:SyntheticEvent) =>{
    e.preventDefault();
  }

  return (
    <div className={style.event_page_container__main_content}>
      <h1 className={style.title}>Список участников</h1>
      <p className={style.subtitle}>Количество заявок на участие: {joinRequests.length}</p>
      <div className={r_style.main_content__members_wrapper}>
        <div className={r_style.members_wrapper__buttons}>
          <button className={style.button_default} onClick={onAcceptAllClick}>Принять все</button>
        </div>
        {joinRequests.map(m => <RequesInEvent
          key={m.id}
          date={m.date}
          time={m.time}
          id={m.id}
          lastname={m.lastname}
          name={m.name}
          group={m.group}
          image={m.image} />)}
      </div>
    </div>
  )
}

type RequesInEventProps = IJoinRequest;

const RequesInEvent = ({ id, lastname, name, group, image, date, time }: RequesInEventProps) => {
  return (
    <div className={r_style.members_wrapper__member}>
      <div className={r_style.member__image}>
        {image ? <img src={image} alt="member" /> : <p className={style.subtitle_min}>{lastname[0]}</p>}
      </div>
      <div className={r_style.member__info}>
        <div className={r_style.info__group_name}>
          <p className={style.subtitle_min}>{lastname} {name}</p>
          <p className={r_style.group_name__group}>{group}</p>
        </div>
        <div className={r_style.info__date}>
          <p className={r_style.date__datetime}>Заявка была подана {date} в {time}</p>
        </div>
      </div>
      <div className={r_style.member__controls}>
        <button className={style.button_default}>Принять</button>
        <button className={style.button_default + " " + r_style.reject_button}>Отклонить</button>
      </div>
    </div>
  )
}

export default EventRequests;
