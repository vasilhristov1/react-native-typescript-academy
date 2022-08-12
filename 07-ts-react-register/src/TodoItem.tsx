import React from "react";
import { User, UserStatus } from "./user.model"
import { TodoListener } from "./TodoApp";
import './TodoItem.css'

interface TodoItemProps {
    todo: User;
    onUpdate: TodoListener;
    onDelete: TodoListener;
}

const TodoItem = ({ todo,onUpdate, onDelete }: TodoItemProps) => {
    function handleCompletion(event: React.MouseEvent) {
        onUpdate({ ...todo, status: UserStatus.SUSPENDED })
    }
    function handleCancelation(event: React.MouseEvent) {
        event.preventDefault();
        onUpdate({ ...todo, status: UserStatus.DEACTIVATED });
    }

    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <div className="TodoItem-NameId">
                    <span className="TodoItem-id">{todo.id}.</span>
                    <span className="TodoItem-name">Name: {todo.firstName} {todo.lastName}</span>
                </div>
                <div className="TodoItem-gender">Gender: {todo.gender}</div>
                <div className="TodoItem-username">Username: {todo.username}</div>
                <div className="TodoItem-img"><img className="profile-img" src={todo.pictureUrl} alt="profile_picture" /></div>
                <div className="TodoItem-description">User description: {todo.description}</div>
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{UserStatus[todo.status]}</span>
                {todo.status === UserStatus.ACTIVE ?
                    (<span className="btn-active">
                        <span className="TodoItem-button fas fa-check-circle"
                        onClick={handleCompletion}></span>
                        <span className="TodoItem-button fas fa-times-circle danger"
                        onClick={handleCancelation}></span>
                        </span>): (
                    <span className="TodoItem-button fa-solid fa-trash danger"
                        onClick={() => onDelete(todo)}></span>)
                }
            </span>
        </div >
    )
}// fas fa-times-circle

export default TodoItem