import axios from '../../services/axios';

export const GET_USER = 'GET_USER';

export const getUser = () => {
    return (dispatch) => {
        return axios.get(`/users/me`).then((res) => {
            dispatch({type: GET_USER, payload: {...res.data, promiseResolved: true}});
        }).catch((err) => {
            console.log(err);
        });
    }
}
