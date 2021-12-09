import React from 'react';
import Button from "./components/Button/button";

const App = () => {
    const login = () => {
        alert("Pressed Login button!");
        /*TODO*/
    }

    const loginGoogle = () => {
        alert("Pressed Login with Google button!");
        /*TODO*/
    }
    return (
        <div>
            <div>
                <Button
                    name="Увійти"
                    linearColorStop="#072468"
                    colorHint="#0F49D3"
                    event={login}
                />
            </div>
            <div>
                <Button
                    name="Увійти через Google"
                    linearColorStop="#FE3030"
                    colorHint="#FE3030"
                    event={loginGoogle}
                />
            </div>
        </div>
    );
}



export default App;