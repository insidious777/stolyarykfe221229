import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialData from '../../initData.json';
import {UserInfo} from "./Widget";


export interface widgetState{
    users: UserInfo[],
    selectedUser: UserInfo,
    isDetailsOpened: boolean
}

const initialState: widgetState = {
    users: initialData,
    selectedUser: {
        "phone": "",
        "name": "",
        "nickname": "",
        "email": "",
        "position": "",
        "photo": ""
    },
    isDetailsOpened: false,
};

export const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        openDetails: (state, action: PayloadAction<UserInfo>) => {
            state.selectedUser = action.payload;
            state.isDetailsOpened = true;
        },

        closeDetails: (state) => {
            state.isDetailsOpened = false;
        },

    },

});
export const { openDetails, closeDetails} = widgetSlice.actions;

export default widgetSlice.reducer;