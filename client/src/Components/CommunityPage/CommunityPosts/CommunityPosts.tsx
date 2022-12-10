import React, {FC} from "react";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectCommunityPosts } from "../../../Selectors";
import { CommunityPublication } from "../CommunityPublication/CommunityPublication";
import AddPublicationForm from "./AddPublicationForm";
import style from "../CommunityPage.module.css";

interface CommunityPostsProps{

}

const CommunityPosts:FC<CommunityPostsProps> = (props) =>{

    let userCanPost = true // temp
    let posts = useTypedSelector(selectCommunityPosts);

    return(
        <div className={style.main_content__posts_section}>
            <div className={style.posts_section__posts_heading}>
                <h2 className={style.title}>Публикации</h2>
                {userCanPost && <AddPublicationForm />}
            </div>
            <div className={style.posts_section__posts}>
                {posts.map(post => <CommunityPublication 
                    id={post.id} 
                    key={post.id} 
                    images={post.images} 
                    title={post.title} 
                    text={post.text} 
                    date={post.date} 
                    authorId={post.authorId}/>)}
            </div>
        </div>
    )
}
export default CommunityPosts;

