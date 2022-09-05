export const initState = {
    value:''
};
export const initCase = {
    CHANGE_VALUE:'change-value'
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case initCase.CHANGE_VALUE:{
            return {
                ...prevState,
                value:payload
            }
        }
        default:{
            console.log(`không tôn tại case key`,initCase)
            return prevState
        }
    }
};