import { Grid,Group } from '@mantine/core';
import {memo} from 'react';
import AuthButton from './Auth';
import MoreButton from './More';
import UploadButton from './Upload';
function HeaderRightComponent(props){
    return (
        <Grid.Col {...props}>
            <Group position="right">
                <UploadButton />
                <AuthButton />
                <MoreButton />
            </Group>
        </Grid.Col>
    )
};export default memo(HeaderRightComponent)