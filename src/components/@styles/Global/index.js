import {memo} from 'react';
import './GlobalStyles.css';
import "normalize.css";
function GlobalStyles({children}){
    return children
};
export default memo(GlobalStyles)