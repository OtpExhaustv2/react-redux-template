import React, {useEffect} from 'react';
import Routes from './components/Routes';
import {useDispatch} from "react-redux";
import {getUser} from "./redux/actions/userAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <Routes/>
    );
};

export default App;