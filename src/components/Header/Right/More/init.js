export const initState = {
    path: [],
};
export const initCase = {
    NEXT: 'next',
    BACK: 'back',
    RESET: 'reset',
};
export function reducerState(prevState, [key, payload]) {
    switch (key) {
        case initCase.NEXT: {
            const newPath = [...prevState.path];
            newPath.push(payload);
            return {
                ...prevState,
                path: newPath,
            };
        }
        case initCase.BACK: {
            const newPath = [...prevState.path];
            newPath.pop();
            return {
                ...prevState,
                path: newPath,
            };
        }
        case initCase.RESET: {
            return {
                ...initState,
            };
        }
        default: {
            console.log(`không tôn tại case key`, initCase);
            return prevState;
        }
    }
}
