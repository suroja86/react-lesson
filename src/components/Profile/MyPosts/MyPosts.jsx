import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={s.posts}>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message="treterteter" likes="20"/>
                <Post message="cccccccccc" likes="200"/>
                <Post message="dddddddddddddd" likes="30"/>
                <Post message="asdsadad" likes="5"/>
            </div>
    );
}

export default MyPosts;