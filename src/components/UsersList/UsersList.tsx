import React, {useState} from 'react';
import s from './UsersList.module.css';
import {ListItem} from "../ListItem/ListItem";
import {UserInfo} from "../Widget/Widget";


export interface UsersListProps{
    list: UserInfo[]
}

export function UsersList({list}: UsersListProps){
    const [isExpanded, setIsExpanded] = useState(false);

    interface ViewAllButtonProps {
        onClick: () => void,
    }
    function ViewAllButton({onClick}: ViewAllButtonProps){
        return(
            <div className={s.ViewAllButton}>
                <button onClick={onClick}>
                    View all
                </button>
            </div>
        )
    }

    return(
        <div className={s.UsersList}>
            {list.slice(0, isExpanded? list.length: 3)
                .map((user, index)=>{
                return(
                    <ListItem key={index} {...user}/>
                )
            })}

            {!isExpanded &&
                <ViewAllButton onClick={() => setIsExpanded(true)}/>
            }
        </div>
    )
}