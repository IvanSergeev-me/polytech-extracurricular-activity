import React from "react";
import style from "./OwlCarousel.module.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ActivityPhotoCard from "../ActivityPhotoCard/ActivityPhotoCard";
import { IPhoto } from "../../../Models/Activities";

interface CarouselProps {
    photos:IPhoto[];
}
 
const Carousel = ({photos}:CarouselProps) => {
    if (photos.length === 0) return null;
    return ( 
        <div className={style.activity_container__gallery}>
                <h2 className={style.title}>Фотогалерея</h2>
                <div className={style.gallery__carousel_container}>
                    <OwlCarousel margin={10} rewind={true} dots={true}> 
                        {photos.map(photo => <ActivityPhotoCard id={photo.id} key={photo.id} content={photo.content} description={photo.description}/>)}
                    </OwlCarousel>
                </div>
        </div>
    );
}
 
export default Carousel;