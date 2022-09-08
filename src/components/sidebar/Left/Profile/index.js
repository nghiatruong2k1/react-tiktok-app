import {memo} from 'react';
import LoginProfile from "./Login";
import { Group } from '@mantine/core';
function ProfileComponent(props){
    return (
        <Group spacing={5}>
            <LoginProfile />
        </Group>
    )
};export default memo(ProfileComponent)