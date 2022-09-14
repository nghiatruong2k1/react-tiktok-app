import {memo,useReducer} from 'react';

import AuthLayout from './layout';
import {routersAuth} from "./routers";
import {initState,reducerState} from "./init";
import AuthProvider from "./provider";
function AuthComponent(props){
    const [state,dispath] = useReducer(reducerState,initState);
    return (
        <AuthProvider {...{state,dispath}}>
            <AuthLayout 
                title={routersAuth[state.path]?.title}
                footer={routersAuth[state.path]?.footer}
            >
                {routersAuth[state.path]?.content}
            </AuthLayout>
        </AuthProvider>
    )
};
export default memo(AuthComponent)