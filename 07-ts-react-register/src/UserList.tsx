import { User } from "./user.model";
import { FilterType, UserListener } from "./UserApp";
import UserItem from "./UserItem";
import './UserList.css'

interface Props{
    users: User[];
    filter: FilterType;
    onUpdate: UserListener;
    onDelete: UserListener;
}

export default function UserList({users, filter, ...rest}: Props) {
    return (<div className="TodoList">
        {
        users.filter(todo => !filter ? true: todo.status === filter).map(todo =>
            (<UserItem user={todo} key={todo.id} {...rest} />))
        }
    </div>)
}