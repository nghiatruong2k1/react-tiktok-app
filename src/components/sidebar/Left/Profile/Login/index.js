import {memo} from 'react';
import { Button ,Text } from '@mantine/core';
function LoginComponent(props){
    return (
        <>
            <Text color={"dimmed"}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</Text>
            <Button size='lg' variant='outline' color={'red'} fullWidth>Đăng nhập</Button>
        </>
    )
};export default memo(LoginComponent)