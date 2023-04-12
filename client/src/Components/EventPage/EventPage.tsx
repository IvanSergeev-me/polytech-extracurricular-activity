import React from 'react';
import style from "./EventPage.module.scss";
import AppRouter from 'Components/Common/Router/Router';
import { eventRoutes } from 'Routes/routes';
import PageService from 'Components/Common/PageService/PageService';
import { GearIcon } from 'Assets';
import { InfoIcon } from 'Assets';
import { MembersIcon } from 'Assets';
import { RequestsIcon } from 'Assets';
import { eventSelector, selectUserId } from 'Selectors';
import { useTypedSelector } from 'Hooks/useTypedSelector';
import { CompareDates } from 'Assets/Utils/CompareDates';
import NotFoundPage from 'Components/Common/NotFoundPage/NotFoundPage';

const EventPage = () => {

    const {info} = useTypedSelector(eventSelector);

    const id = useTypedSelector(selectUserId);

    if(info.creatorId !== id) return <NotFoundPage />

    const isOver = !CompareDates(info.date);

    return (
        <section className={style.event_page_container}>
            <div className={style.event_page_container__heading}>
                <div className={style.heading__info}>
                    <h1 className={style.title}>{info.name}</h1>
                    <p className={style.subtitle_grey}>Мероприятие {isOver?"завершилось":"запланировано на"} {info.date}</p>
                </div>
                <div className={style.heading__services} >
                    <PageService id={0} name={"Настройки"} image={GearIcon} color={"#EC5F6B"} link={`./settings`} />
                    <PageService id={1} name={"Заявки"} image={RequestsIcon} color={"#EC5FB6"} link={`./requests`} />
                    <PageService id={2} name={"Участники"} image={MembersIcon} color={"#9CBBFF"} link={"./members"} />
                    <PageService id={3} name={"Информация"} image={InfoIcon} color={"#5F6DEC"} link={`/activities/${0}`} />
                </div>
            </div>
            <AppRouter routes={eventRoutes} />
        </section>
    )
}

export default EventPage;
