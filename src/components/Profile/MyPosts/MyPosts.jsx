import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.postsData.map(
        p => <Post message={p.message} likes={p.likes}/>
    )
    return (
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
    );
}

export default MyPosts;