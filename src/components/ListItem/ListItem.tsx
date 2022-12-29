import React from 'react';
import s from './ListItem.module.css';
export interface UserShortInfo {
    name: string;
    nickname: string;
    photo: string;
}

export function ListItem(info: UserShortInfo){
    const photoUrl = require(`../../assets/img/${info.photo}`);
    return(
        <div className={s.ListItem}>
            <img src={photoUrl}/>
            <div className={s.ListItemContent}>
                <b>{info.name}</b>
                <p>{info.nickname}</p>
            </div>
            <button>
                View
            </button>
        </div>
    )
}