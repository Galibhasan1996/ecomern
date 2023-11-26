import server from '../../reduxToolkit/store/Store.js'
import axios from 'axios'
// action for loging

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'loginRequest'
        })
        const { data } = await axios.post(`${server}/user/login`,
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        dispatch({
            type: "logingSuccess",
            payload: data?.message
        })


    } catch (error) {
        dispatch({
            type: 'loginFail',
            payload: error.response.data.message
        })
    }
}