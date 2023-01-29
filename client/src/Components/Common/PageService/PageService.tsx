import React, {FC, useState} from "react";
import { NavLink } from "react-router-dom";
import style from "./PageService.module.css";
import classNames from "classnames/bind";

type PageServiceProps = PageServicePropsLink | PageServicePropsCallback;

type PageServicePropsBase = {
    id:number;
    name:string;
    color:string;
    image:any;
}

type PageServicePropsLink = PageServicePropsBase & {
    link:string
    onServiceClick?:never
}

type PageServicePropsCallback = PageServicePropsBase & {
    link?:never
    onServiceClick:Function
}

const PageService:FC<PageServiceProps> = (props) =>{

    if(props.onServiceClick){
        return(
            <div className={style.service}  onClick={()=> props.onServiceClick()}>
               <PageServiceContent name={props.name} color={props.color} image={props.image}/>
            </div>
        )
    }
    if(props.link){
        return(
            <NavLink className={style.service} to={props.link}>
                <PageServiceContent name={props.name} color={props.color} image={props.image}/>
            </NavLink>
        )
    }
    return(
        <div className={style.service}>
            <PageServiceContent name={props.name} color={props.color} image={props.image}/>
        </div>
    )
    
}

interface ServiceContentProps {
    name:string;
    color:string;
    image:any;
}

let PageServiceContent = (props:ServiceContentProps) =>{

    const cx = classNames.bind(style);

    const [isHovered, setHovered] = useState<boolean>(false);
    
    const changeHovered = (hover:boolean) =>{
        setHovered(hover);
    }

    const onHoverStyle = {
        transition: 'all 0.2s ease 0s',
        boxShadow: `${props.color?props.color:"#5F6DEC"} 0px 20px 110px 60px`,
        backgroundColor:`${props.color}`,
        transform: 'scale(1.1) translateY(20px)',
    }

    const ImageBoxClass = cx({
        service_container__image_box:true,
        backgroundDefault:!props.color,
    });

    return(
        <div  onMouseEnter={()=>changeHovered(true)} onMouseLeave={()=>changeHovered(false)} className={style.service_container}>
             <div style={isHovered?onHoverStyle:{backgroundColor:`${props.color}`}} className={ImageBoxClass}>
                {props.image?<img src={props.image} alt="serviceIcon" />:<div></div>}
            </div>
            <h3 className={style.service_container__title}>{props.name}</h3>
        </div>
    )
}

export default PageService;