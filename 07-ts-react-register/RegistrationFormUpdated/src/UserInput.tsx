import React, { Component } from 'react';
import { Optional } from './shared-types';
import { User, UserRole, UserStatus } from './user.model';
import { UserListener } from './UserApp';

interface UserInputProps {
    user: Optional<User>
    onCreateUser: UserListener
}

interface UserInputState {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    gender: string;
    pictureUrl: string;
    description: string;
}

class UserInput extends Component<UserInputProps, UserInputState> {
    state: Readonly<UserInputState> = {
        id: this.props.user?.id?.toString() || '',
        firstName: this.props.user?.firstName || '',
        lastName: this.props.user?.firstName || '',
        username: this.props.user?.firstName || '',
        password: this.props.user?.firstName || '',
        gender: this.props.user?.firstName || '',
        pictureUrl: this.props.user?.firstName || '',
        description: this.props.user?.firstName || ''
    }
    handleUserSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onCreateUser(
            new User(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.gender, this.state.pictureUrl, this.state.description, (this.state.id ? parseInt(this.state.id) : undefined), UserRole.USER));
        this.setState({ id: this.props.user?.id?.toString() || '',
        firstName: this.props.user?.firstName || '',
        lastName: this.props.user?.firstName || '',
        username: this.props.user?.firstName || '',
        password: this.props.user?.firstName || '',
        gender: this.props.user?.firstName || '',
        pictureUrl: this.props.user?.firstName || '',
        description: this.props.user?.firstName || '' })
    }

    handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof UserInputState & string;
        const stateUpdate = { [fieldName]: event.target.value } as unknown as UserInputState;
        this.setState(stateUpdate);
    }

    handleuserReset = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({ id: this.props.user?.id?.toString() || '',
        firstName: this.props.user?.firstName || '',
        lastName: this.props.user?.firstName || '',
        username: this.props.user?.firstName || '',
        password: this.props.user?.firstName || '',
        gender: this.props.user?.firstName || '',
        pictureUrl: this.props.user?.firstName || '',
        description: this.props.user?.firstName || '' })
    }

    render() {
        return (
            <form className="RegisterInput-form" onSubmit={this.handleUserSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" id="RegisterInput-user-fName" name="firstName" value={this.state.firstName}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-fName">First name</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" id="RegisterInput-user-lName" name="lastName" value={this.state.lastName}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-lName">Last name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" id="RegisterInput-user-uName" name="username" value={this.state.username}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-uName">Username</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="password" id="RegisterInput-user-pWord" name="password" value={this.state.password}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-fName">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="RegisterInput-user-gen" name="gender" value={this.state.gender}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-gen">Gender</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="RegisterInput-todo-imgUrl" name="pictureUrl" value={this.state.pictureUrl}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-imgUrl">Image URL</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="RegisterInput-user-desc" name="description" value={this.state.description}
                            onChange={this.handleTextChanged} />
                        <label htmlFor="RegisterInput-user-desc">Description</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="submit">Sign in</button>
                <button className="btn waves-effect waves-light" type="reset" onClick={this.handleuserReset} name="submit">Reset</button>
            </form>
        );
    }
}

export default UserInput;