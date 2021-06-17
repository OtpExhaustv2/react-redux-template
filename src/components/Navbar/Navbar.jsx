import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Logout from "../Auth/Logout";

const Navbar = () => {
    const user = useSelector((state) => state.userReducer);

    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/profile'>
                        Profile
                    </NavLink>
                </li>
                {user._id ? (
                    <Logout/>
                ) : (
                    <li>
                        <NavLink exact to='/profile'>
                            <img src="./img/icons/login.svg" alt="Login icon"/>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;