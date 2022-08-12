import { User } from "./user.model";
import { FilterType, TodoListener } from "./TodoApp";
import TodoItem from "./TodoItem";
import './TodoList.css'

interface Props{
    users: User[];
    filter: FilterType;
    onUpdate: TodoListener;
    onDelete: TodoListener;
}

export default function TodoList({users, filter, ...rest}: Props) {
    return (<div className="TodoList">
        {
        users.filter(todo => !filter ? true: todo.status === filter).map(todo =>
            (<TodoItem todo={todo} key={todo.id} {...rest} />))
        }
    </div>)
}