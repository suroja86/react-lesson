import React from 'react';
import Button from "./button";
import {decrement, increment} from "../reducer/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const ButtonsWithCounter = (props) => {
    const login = () => {
        dispatch(increment());
    }

    const loginGoogle = () => {
        dispatch(decrement());
    }
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div className={'buttonsWrapper'}>
            <div>
                <Button
                    name={props.state.buttons.login}
                    color={'red'}
                    event={login}
                />
            </div>
            <span>Count: {count}</span>
            <div>
                <Button
                    name={props.state.buttons.loginGoogle}
                    color={'blue'}
                    event={loginGoogle}
                />
            </div>
        </div>
    );
}

export default ButtonsWithCounter;