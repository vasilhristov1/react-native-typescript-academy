import React from "react";
import { User, UserStatus } from "./user.model"
import { UserListener } from "./UserApp";
import './UserItem.css'

interface UserItemProps {
    user: User;
    onUpdate: UserListener;
    onDelete: UserListener;
}

const UserItem = ({ user, onUpdate, onDelete }: UserItemProps) => {
    function handleSuspension(event: React.MouseEvent) {
        onUpdate({ ...user, status: UserStatus.SUSPENDED })
    }
    function handleDeactivation(event: React.MouseEvent) {
        event.preventDefault();
        onUpdate({ ...user, status: UserStatus.DEACTIVATED });
    }

    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <div className="TodoItem-NameId">
                    <span className="TodoItem-id">{user.id}.</span>
                    <span className="TodoItem-name">Name: {user.firstName} {user.lastName}</span>
                </div>
                <div className="TodoItem-gender">Gender: {user.gender}</div>
                <div className="TodoItem-username">Username: {user.username}</div>
                <div className="TodoItem-img"><img className="profile-img" src={user.pictureUrl} alt="profile_picture" /></div>
                <div className="TodoItem-description">User description: {user.description}</div>
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{UserStatus[user.status]}</span>
                {user.status === UserStatus.ACTIVE ?
                    (<span className="btn-active">
                        <span className="TodoItem-button fas fa-check-circle"
                        onClick={handleSuspension}></span>
                        <span className="TodoItem-button fas fa-times-circle danger"
                        onClick={handleDeactivation}></span>
                        </span>): (
                    <span className="TodoItem-button fa-solid fa-trash danger"
                        onClick={() => onDelete(user)}></span>)
                }
            </span>
        </div >
    )
}// fas fa-times-circle

export default UserItem