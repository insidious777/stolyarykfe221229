import React from 'react';
import s from './Widget.module.css';
import {UsersList} from "../UsersList/UsersList";

export interface UserInfo {
    "phone": string,
    "name": string,
    "nickname": string,
    "email": string,
    "position": string,
    "photo": string
}

export interface WidgetProps {
    list: UserInfo[]
}

export function Widget(list: WidgetProps){
    console.log(list)
    return(
        <div className={s.Widget}>
            <UsersList/>
        </div>
    )
}