import { User, UserRole } from "./user.model";

const MOCK_USERS = [
    new User('Vasil', 'Hristov', 'vasilhristov1', '12345678', 'Male', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'React App', UserRole.USER),
    new User('Jason', 'Statham', 'jsonst', '14256', 'Male', 'https://www.themoviedb.org/t/p/w500/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg', 'Actor', UserRole.USER),
    new User('Arnold', 'Schwarzenegger', 'arnold123', '7x1234', 'Male', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png', 'React App', UserRole.USER)
];

export default MOCK_USERS;