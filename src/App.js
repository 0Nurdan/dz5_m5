import React from 'react';
import { useSelector } from 'react-redux';
import UserForm from "./components/UserForm";

const App = () => {
    const successMessage = useSelector(state => state.successMessageVisible);

    return (
        <div>
            <h1>Создать пользователя</h1>
            <UserForm />
            {successMessage && <p>Пользователь успешно создан!</p>}
        </div>
    );
};

export default App;
