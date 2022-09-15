import {memo} from 'react';
import LoginProfile from "./Login";
import { Stack } from '@mui/material';
function ProfileComponent(props){
    return (
        <Stack spacing={2}>
            <LoginProfile />
        </Stack>
    )
};export default memo(ProfileComponent)