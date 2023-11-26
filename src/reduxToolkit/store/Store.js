import { configureStore } from "@reduxjs/toolkit"
import { UserReducer } from "../action/UserReducer"



// export const store = configureStore({
//     reducer: {
//         user: UserReducer
//     }
// })

export default configureStore({
    reducer: {
        user: UserReducer
    }
})

export const server = 'http://192.168.42.231:8080/api/v1'
