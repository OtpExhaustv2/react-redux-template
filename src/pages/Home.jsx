import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.userReducer);

    return (
        <div>
            <p>Hello from Home page</p>
            {user._id && (
                <p>Bienvenue {user.pseudo}</p>
            )}
        </div>
    );
};

export default Home;