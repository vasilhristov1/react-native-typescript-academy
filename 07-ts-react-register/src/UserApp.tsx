import React, { Component } from 'react';
import './App.css';
import { User, UserStatus } from './user.model';
import MOCK_USERS from './mock-users';
import UserList from './UserList';
import UserInput from './UserInput';
import UserFilter from './UserFilter';
import { UsersAPI } from './rest-api-client';


export type FilterType = UserStatus | undefined;

interface UserAppState {
  users: User[];
  filter: FilterType;
}

export interface UserListener {
  (todo: User): void;
}

export interface FilterChangeListener {
    (filter: FilterType): void;
}

class UserApp extends Component<{}, UserAppState> {
  state: Readonly<UserAppState> = {
    users: MOCK_USERS,
    filter: undefined
  }
  constructor(props: {}) {
    super(props)
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  async componentDidMount() {
    try {
        const allUsers = await UsersAPI.findAll();
        this.setState({users: allUsers});
    } catch(err) {
        // this.setState({errors: (err as any).toString()})
    }
  }

  handleUpdateTodo(user: User) {
    this.setState(({ users: todos }) => ({
      users: todos.map(td => td.id === user.id ? user : td)
    }))
  }

  handleDeleteTodo = (user: User) => {
    this.setState(({ users: todos }) => ({
      users: todos.filter(td => td.id !== user.id)
    }))
  }

  handleCreateTodo = (user: User) => {
    this.setState(({ users: todos }) => ({
      users: todos.concat(user)
    }))
  }

  handlefilterChange = (status: FilterType) => {
    this.setState({filter: status})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Registration</h2>
          <UserInput onCreateUser={this.handleCreateTodo} />
          <UserFilter filter={this.state.filter} onFilterChange={this.handlefilterChange} />
          <UserList
            users={this.state.users}
            filter={this.state.filter}
            onUpdate={this.handleUpdateTodo}
            onDelete={this.handleDeleteTodo}
          />
        </header>
      </div>
    );
  }
}

export default UserApp;