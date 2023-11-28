import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "../action/UserReducer"






export default configureStore({
    reducer: {
        user: userReducer,
    },
});

export const server = 'https://shiny-yak-moccasins.cyclic.app/api/v1'
