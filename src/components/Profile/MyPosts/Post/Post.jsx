import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6O4JS5C7gf_3OUcnfBSKsebHAoN7zizySg&usqp=CAU"/>
            {props.message}
            <div>
                <span>{props.likes} Like(s)</span>
            </div>
        </div>
    );
}

export default Post;