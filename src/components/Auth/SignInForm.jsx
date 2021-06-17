import React, {useState} from 'react';
import axios from '../../services/axios';

const SignInForm = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post(`/login`, {email: state.email, password: state.password}).then((res) => {
            if (res.data.errors) {
                setErrors({email: res.data.errors.email, password: res.data.errors.password});
            } else {
                window.location = '/';
            }
        });
    }

    const handleChange = (e) => {
        const {id, value} = e.target;

        setState(state => ({...state, [id]: value}));
        if (errors[id] !== null) {
            setErrors(errors => ({...errors, [id]: null}));
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <br/>
            <input type="text" name="email" id="email" value={state.email} onChange={handleChange}/>
            {errors.email && <div>{errors.email}</div>}
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password" value={state.password} onChange={handleChange}/>
            {errors.password && <div>{errors.password}</div>}
            <input type="submit" value="Se connecter"/>
        </form>
    );
};

export default SignInForm;