import React from 'react';
import Button from "./components/Button/button";
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from "./components/counter/counterSlice";

const App = () => {
    const login = () => {
        dispatch(increment());
        /*TODO*/
    }

    const loginGoogle = () => {
        dispatch(decrement());
        /*TODO*/
    }
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <Button
                    name="Увійти"
                    class="loginButton red"
                    event={login}
                />
            </div>
            <span>Count: {count}</span>
            <div>
                <Button
                    name="Увійти через Google"
                    class="loginButton blue"
                    event={loginGoogle}
                />
            </div>
        </div>
    );
}



export default App;