import { useMemo } from "react";
import { User } from "./user.model";
import { FilterType, UserListener } from "./UserApp";
import UserItem from "./UserItem";
import './UserList.css'

interface Props {
    users: User[];
    filter: FilterType;
    onUpdate: UserListener;
    onDelete: UserListener;
    onEdit: UserListener;
}

export default function UserList({ users, filter, ...rest }: Props) {
    const visibleTodos = (users: User[], filter: FilterType) => users.filter(user => !filter ? true : user.status === filter);
    const memizedVisibleTodos = useMemo(() => visibleTodos(users, filter), [users, filter]);
    return (<div className="TodoList">
        {
            memizedVisibleTodos.map(user =>
                <UserItem user={user} key={user.id} {...rest} />)
        }
    </div>)
}