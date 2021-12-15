import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {updateNewPostText} from "../../../state";

const MyPosts = (props) => {
    let posts = props.posts.map(
        p => <Post message={p.message} likes={p.likes}/>
    )
    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text,

        });
    }
    return (
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
    );
}

export default MyPosts;