import React from 'react';
import style from "../EventPage.module.scss";
import m_style from "./EventMembers.module.scss";
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { eventSelector } from 'Selectors';
import { IMemberShort } from 'Models/User';

const EventMembers = () => {

  const { members } = useTypedSelector(eventSelector);

  return (
    <div className={style.event_page_container__main_content}>
      <h1 className={style.title}>Список участников</h1>
      <p className={style.subtitle}>На мероприятие уже зарегистрировалось {members.length} участников</p>
      <div className={m_style.main_content__members_wrapper}>
        {members.map(m => <MemberInEvent key={m.id} id={m.id} lastname={m.lastname} name={m.name} group={m.group} image={m.image} />)}
      </div>
    </div>
  )
}

type MemberInEventProps = IMemberShort;

const MemberInEvent = ({ id, lastname, name, group, image }: MemberInEventProps) => {
  return (
    <div className={m_style.members_wrapper__member}>
      <div className={m_style.member__image}>
        {image ? <img src={image} alt="member" /> : <p className={style.subtitle_min}>{lastname[0]}</p>}
      </div>
      <div className={m_style.member__info}>
        <p className={style.subtitle_min}>{lastname} {name}</p>
        <p className={m_style.info__group}>{group}</p>
      </div>
    </div>
  )
}

export default EventMembers;