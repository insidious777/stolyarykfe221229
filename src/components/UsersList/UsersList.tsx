import React, {useState} from 'react';
import s from './UsersList.module.css';
import {ListItem, UserShortInfo} from "../ListItem/ListItem";

export function UsersList(){
    const [isExpanded, setIsExpanded] = useState(false);
    const ViewAllButton = () => {
        return(
            <div className={s.ViewAllButton}>
                <button>
                    View all
                </button>
            </div>
        )
    }

    const data: UserShortInfo ={
        'name':'Geordan Aaryn',
        'nickname':'@geordanaaryn',
        'photo':'1.jpg',
    }

    return(
        <div className={s.UsersList}>
            <ListItem {...data}/>
            <ListItem {...data}/>
            <ListItem {...data}/>
            <ViewAllButton/>
        </div>
    )
}