import React from 'react';
import './page.sass'

let Page = (props) => {
    return (
        <div className={'wrapper'}>
            <label for="Some input">Some input:</label>
            <input type="text"></input>
        </div>
    );
}

export default Page;