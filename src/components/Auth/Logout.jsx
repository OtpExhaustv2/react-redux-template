import React from 'react';
import axios from '../../services/axios';
import cookie from 'js-cookie';

const Logout = () => {

    const logout = async () => {
        await axios.get('/logout').then(() => removeCookie('jwt')).catch((err) => console.log(err));
        window.location = '/';
    }

    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1});
        }
    }

    return (
        <li onClick={logout}>
            <img src="./img/icons/logout.svg" alt=""/>
        </li>
    );
};

export default Logout;