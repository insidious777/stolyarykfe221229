import React from 'react';
import s from './UserDetails.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {closeDetails} from "../Widget/widgetSlice";
import {UserInfo} from "../Widget/Widget";


export function UserDetails(user: UserInfo){
    const dispatch = useAppDispatch();


     const photoUrl = require(`../../assets/img/${user?.photo}`);
    return(
        <div className={s.UserDetails}>
            <img alt={"user"} src={photoUrl}/>
            <b>{user.name}</b>
            <p className={s.position}>{user.position}</p>
            <div className={s.UserDetailsContent}>
                <b>Phone</b>
                <p>{user.phone}</p>
                <b>Nickname</b>
                <a href={"/"}>{user.nickname}</a>
                <b>Email</b>
                <a
                    className={s.email}
                    href={`mailto:${user.email}`}
                >{user.email}</a>
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.sendMessageButton}>
                    Send message
                </button>
            </div>
            <button
                className={s.closeButton}
                onClick={() => dispatch(closeDetails())}>
                &#10006;
            </button>
        </div>
    )
}