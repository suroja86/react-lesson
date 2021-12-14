import React from 'react';
import './page.sass'
import Input from "./Input";

let Page = (props) => {
    return (
        <div className={'wrapper'}>
            <h1>{props.state.titles.loginPage}</h1>
            <Input placeHolder={props.state.placeHolders.email}/>
        </div>
    );
}

export default Page;