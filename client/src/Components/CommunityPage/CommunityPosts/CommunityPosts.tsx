import React, {FC} from "react";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectCommunityPosts } from "../../../Selectors";
import { CommunityPublication } from "./CommunityPublication";
import AddPublicationForm from "./AddPublicationForm";
import style from "../CommunityPage.module.scss";
import p_style from "./CommunityPosts.module.css";

const CommunityPosts:FC = (props) =>{

    const posts = useTypedSelector(selectCommunityPosts);

    return(
        <div className={p_style.main_content__posts_section}>
            <div className={p_style.posts_section__posts_heading}>
                <h2 className={style.title}>Публикации</h2>
                <AddPublicationForm />
            </div>
            <div className={p_style.posts_section__posts}>
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

