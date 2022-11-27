import React, {FC} from "react";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { selectCommunityPosts } from "../../../Selectors";
import { CommunityPublication } from "../CommunityPublication/CommunityPublication";
import AddPublicationForm from "./AddPublicationForm";

interface CommunityPostsProps{

}

const CommunityPosts:FC<CommunityPostsProps> = (props) =>{

    let userCanPost = true // temp
    let posts = useTypedSelector(selectCommunityPosts);

    return(
        <div>
            <div>
                <h2>Публикации</h2>
                {userCanPost && <AddPublicationForm />}
            </div>
            <div>
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

