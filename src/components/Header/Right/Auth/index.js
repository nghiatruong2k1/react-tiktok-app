import {memo,Fragment} from 'react';
import clsx from 'clsx';
import LoginButton from "./Login";
function AuthComponent(props){
    return (
        <Fragment>
            <LoginButton />
        </Fragment>
    )
};
export default memo(AuthComponent)