import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import style from "./NotFoundPage.module.scss";
import SadEmoji from "../../../Assets/Images/sad_emoji.gif";

const NotFoundPage:FC = (props) =>{
    return(
        <section className={style.not_found_container}>
            <div className={style.not_found_container__emoji}>
                <img src={SadEmoji} alt="sademoji" />
            </div>
            <h3 className={style.not_found_container__text}>Такой страницы не существует. Вы можете вернуться на главную</h3>
            <NavLink to="/" className={style.not_found_container__link}><p className={style.link__text}>Перейти на главную</p></NavLink>
        </section>
    )
}

export default NotFoundPage;