import React from 'react';
import s from './ListItem.module.css';
import {useAppDispatch} from "../../app/hooks";
import {openDetails} from "../Widget/widgetSlice";
import {UserInfo} from "../Widget/Widget";

export function ListItem(info: UserInfo){
    const dispatch = useAppDispatch();

    const photoUrl = require(`../../assets/img/${info.photo}`);
    return(
        <div className={s.ListItem}>
            <img alt={"user"} src={photoUrl}/>
            <div className={s.ListItemContent}>
                <b>{info.name}</b>
                <p>{info.nickname}</p>
            </div>
            <button onClick={() => dispatch(openDetails(info))}>
                View
            </button>
        </div>
    )
}