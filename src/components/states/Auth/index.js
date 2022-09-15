export const initState = {
    isOpen: false,
    user: null,
};
export const initCase = {};
export function reducerState(prevState, [key, payload]) {
    switch (key) {
        default: {
            console.log(`không tôn tại case key`, initCase);
            return prevState;
        }
    }
}
