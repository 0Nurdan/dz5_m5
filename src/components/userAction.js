export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const HIDE_SUCCESS_MESSAGE = 'HIDE_SUCCESS_MESSAGE';
export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';

export const createUser = user => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Ошибка');
            }

            const data = await response.json();
            dispatch({ type: CREATE_USER_SUCCESS, payload: data });
            dispatch({ type: SHOW_SUCCESS_MESSAGE });

            setTimeout(() => {
                dispatch({ type: HIDE_SUCCESS_MESSAGE });
            }, 5000);

        } catch (error) {
            dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
        }
    };
};
