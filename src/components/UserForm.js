import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createUser } from "./userAction";

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const Submit = event => {
        event.preventDefault();
        const user = { name, username, email, website };
        dispatch(createUser(user));
        setName('');
        setUsername('');
        setEmail('');
        setWebsite('');
    };

    return (
        <form onSubmit={Submit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" value={website} onChange={event => setWebsite(event.target.value)} />
            </div>
            <button type="submit">Создать</button>
        </form>
    );
};

export default UserForm;
