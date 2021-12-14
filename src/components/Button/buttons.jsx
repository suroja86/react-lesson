import React from 'react';
import './button.sass'
import Button from "./button";
import {decrement, increment} from "../counter/counterSlice";
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
                    name="Увійти"
                    class={'loginButton red'}
                    event={login}
                />
            </div>
            <span>Count: {count}</span>
            <div>
                <Button
                    name="Увійти через Google"
                    class={'loginButton blue'}
                    event={loginGoogle}
                />
            </div>
        </div>
    );
}

export default ButtonsWithCounter;