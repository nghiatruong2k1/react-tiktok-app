export const initState = {
    path:'login'
};
export const initCase = {
    SET_PATH:'set_path'
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case initCase.SET_PATH:{
            return{
                ...prevState,
                path:payload
            }
        }
        default:{
            console.log(`không tôn tại case key`,initCase)
            return prevState
        }
    }
};