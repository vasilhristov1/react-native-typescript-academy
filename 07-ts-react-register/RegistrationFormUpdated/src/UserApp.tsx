import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { User, UserStatus } from './user.model';
import UserList from './UserList';
import UserInput from './UserInput';
import UserFilter from './UserFilter';
import { TodosAPI } from './rest-api-client';
import { Optional } from './shared-types';


export type FilterType = UserStatus | undefined;

interface UserAppState {
  users: User[];
  editedUser: Optional<User>,
  filter: FilterType;
  errors: string | undefined;
}

export interface UserListener {
  (user: User): void;
}

export interface FilterChangeListener {
  (filter: FilterType): void;
}

class UserApp extends Component<{}, UserAppState> {
  state: Readonly<UserAppState> = {
    users: [],
    editedUser: undefined,
    filter: undefined,
    errors: undefined
  }

  constructor(props: {}) {
    super(props)
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  async componentDidMount() {
    try {
      const allUsers = await TodosAPI.findAll();
      this.setState({ users: allUsers, errors: undefined })
    } catch (err) {
      this.setState({ errors: err as string })
    }
  }

  handleUpdateUser(user: User) {
    this.setState(({ users }) => ({
      users: users.map(td => td.id === user.id ? user : td)
    }))
  }

  handleDeleteUser = async (user: User) => {
    try {
      await TodosAPI.deleteById(user.id);
      this.setState(({ users }) => ({
        users: users.filter(td => td.id !== user.id),
        errors: undefined
      }));
    } catch (err) {
      this.setState({ errors: err as string })
    }
  }

  handleCreateUser = async (user: User) => {
    try {
      if (user.id) { //edit todo
        const updated = await TodosAPI.update(user);
        this.setState(({ users }) => ({
          users: users.map(td => td.id === updated.id ? updated : td),
          errors: undefined,
          editedUser: undefined
        }))
      } else { // create todo
        const created = await TodosAPI.create(user);
        this.setState(({ users }) => ({
          users: users.concat(created),
          errors: undefined
        }));
      }
    } catch (err) {
      this.setState({ errors: err as string })
    }
  }

  handleEditUser = (user: User) => {
    this.setState({ editedUser: user });
  }

  handlefilterChange = (status: FilterType) => {
    this.setState({ filter: status })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>TODO Demo</h2>
          {this.state.errors && <div className="errors">{this.state.errors}</div>}
          <UserInput key={this.state.editedUser?.id} user={this.state.editedUser} onCreateUser={this.handleCreateUser} />
          <UserFilter filter={this.state.filter} onFilterChange={this.handlefilterChange} />
          <UserList
            users={this.state.users}
            filter={this.state.filter}
            onUpdate={this.handleUpdateUser}
            onDelete={this.handleDeleteUser}
            onEdit={this.handleEditUser}
          />
        </header>
      </div>
    );
  }
}

export default UserApp;
