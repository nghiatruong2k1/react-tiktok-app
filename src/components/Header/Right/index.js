
import { Grid, Stack } from '@mui/material';
import {memo} from 'react';
import AuthButton from './Auth';
import MoreButton from './More';
import UploadButton from './Upload';
function HeaderRightComponent(props){
    return (
        <Grid item {...props}>
            <Stack spacing={1} direction={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                <UploadButton />
                <AuthButton />
                <MoreButton />
            </Stack>
        </Grid>
    )
};export default memo(HeaderRightComponent)