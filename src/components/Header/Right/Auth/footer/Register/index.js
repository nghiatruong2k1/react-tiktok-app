import {memo,useContext} from 'react';
import { AuthContext } from '../../provider';
import { initCase} from '../../init';
import { Typography,Link } from '@mui/material';
function RegisterComponent(props){
    const {dispath} = useContext(AuthContext);
    return (
        <Typography align="center" sx={{py:1}}>
            Bạn đã có tài khoản? 
            <Link 
                to="#" 
                underline='hover'
                fontWeight='bold'
                onClick={() => dispath([initCase.LOGIN])}
            >
                {" Đăng nhập "}
            </Link>
        </Typography>
    )
};export default memo(RegisterComponent)