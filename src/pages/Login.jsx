import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type="text" placeholder='Ведите логин'></MyInput>
                <MyInput type="password" placeholder='Ведите пароль'></MyInput>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;