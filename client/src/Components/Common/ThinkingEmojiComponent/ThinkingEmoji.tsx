import React from "react";
import style from "./ThinkingEmoji.module.scss";
import ThinkingEmoji from "../../../Assets/Images/thinking_emoji.gif";

type ThinkingProps = {text:string}

const ThinkingEmojiComponent = ({text}:ThinkingProps) =>{
    return(
        <section className={style.thinking_container}>
            <div className={style.thinking_container__emoji}>
                <img src={ThinkingEmoji} alt="ThinkingEmoji" />
            </div>
            <h3 className={style.thinking_container__text}>{text}</h3>
        </section>
    )
}

export default ThinkingEmojiComponent;