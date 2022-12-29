import React from 'react';
import s from './Widget.module.css';
import {UsersList} from "../UsersList/UsersList";

import {useAppSelector} from "../../app/hooks";
import {UserDetails} from "../UserDetails/UserDetails";


export interface WidgetProps {
    list: UserInfo[]
}

export interface UserInfo {
    "phone": string,
    "name": string,
    "nickname": string,
    "email": string,
    "position": string,
    "photo": string
}

export function Widget(props: WidgetProps){
    const isDetailsOpened = useAppSelector((state) => state.widget.isDetailsOpened);
    const selectedUser = useAppSelector((state) => state.widget.selectedUser);
    return(
        <div className={s.Widget}>
            {isDetailsOpened?
                <UserDetails {...selectedUser}/>:
                <UsersList list={props.list}/>
            }
        </div>
    )
}