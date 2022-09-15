import {memo} from 'react';
import { Button ,Typography } from '@mui/material';
import styles from './styles.module.css';
function LoginComponent(props){
    return (
        <>
            <Typography>Đăng nhập để follow các tác giả, thích video và xem bình luận.</Typography>
            <Button className={styles.button} color="error" variant='outlined'>Đăng nhập</Button>
        </>
    )
};export default memo(LoginComponent)