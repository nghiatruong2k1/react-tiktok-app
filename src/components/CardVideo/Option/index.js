import {memo} from 'react';
import { IconHeart, IconMessageDots, IconShare } from '@tabler/icons';
import { IconButton , Stack} from '@mui/material';
function CardVideoOptionComponent({loading}){
    return (
        <Stack alignSelf={'flex-end'}>
            <IconButton size='large' >
                <IconHeart /> 
            </IconButton>
            <IconButton size='large' >
                <IconMessageDots /> 
            </IconButton>
            <IconButton size='large' >
                <IconShare /> 
            </IconButton>
        </Stack>
    )
};export default memo(CardVideoOptionComponent)