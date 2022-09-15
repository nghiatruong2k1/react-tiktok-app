export const initState = {
    path: 'login',
};
export const initCase = {
    SET_PATH: 'set_path',
    LOGIN: 'set_path_login',
    REGISTER: 'set_path_register',
};
export function reducerState(prevState, [key, payload]) {
    switch (key) {
        case initCase.SET_PATH: {
            return {
                ...prevState,
                path: payload,
            };
        }
        case initCase.LOGIN: {
            return {
                ...prevState,
                path: 'login',
            };
        }
        case initCase.REGISTER: {
            return {
                ...prevState,
                path: 'register',
            };
        }
        default: {
            console.log(`không tôn tại case key`, initCase);
            return prevState;
        }
    }
}
