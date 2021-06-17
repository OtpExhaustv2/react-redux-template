import React from 'react';
import {useSelector} from "react-redux";
import SignInForm from "../components/Auth/SignInForm";

const Profile = () => {
    const user = useSelector((state) => state.userReducer);

    return (
        <div>
            {user.promiseResolved && (
                !user._id && (
                    <SignInForm/>
                )
            )}
        </div>
    );
};

export default Profile;