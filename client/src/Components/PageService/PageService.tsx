import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import style from "./PageService.module.css";

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
    return(
        <div className={style.service_container}>
             <div className={style.service_container__image_box}>
                {props.image?<img src={props.image} alt="serviceIcon" />:<div></div>}
            </div>
            <h3 className={style.service_container__title}>{props.name}</h3>
        </div>
    )
}

export default PageService;