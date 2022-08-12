import React from "react";
import { Todo, TodoStatus } from "./todo.model"
import { TodoListener } from "./TodoApp";
import './TodoItem.css'

interface TodoItemProps {
    todo: Todo;
    onUpdate: TodoListener;
    onDelete: TodoListener;
}

const TodoItem = ({ todo,onUpdate, onDelete }: TodoItemProps) => {
    function handleCompletion(event: React.MouseEvent) {
        onUpdate({ ...todo, status: TodoStatus.Completed })
    }
    function handleCancelation(event: React.MouseEvent) {
        event.preventDefault();
        onUpdate({ ...todo, status: TodoStatus.Canceled });
    }

    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">{todo.id}</span>
                {todo.text} - {todo.deadline.toDateString()}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{TodoStatus[todo.status]}</span>
                {todo.status === TodoStatus.Active ?
                    (<span className="btn-active">
                        <span className="TodoItem-button fas fa-check-circle"
                        onClick={handleCompletion}></span>
                        <span className="TodoItem-button fas fa-times-circle danger"
                        onClick={handleCancelation}></span>
                        </span>): (
                    <span className="TodoItem-button fas fa-times-circle danger"
                        onClick={() => onDelete(todo)}></span>)
                }
            </span>
        </div >
    )
}

export default TodoItem