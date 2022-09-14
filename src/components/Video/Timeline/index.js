import {memo} from 'react';
import { Stack, Slider } from '@mui/material';
function TimelineComponent(props){
    return (
        <Stack direction='row' alignItems="center" spacing={2}>
            <span>00:00</span>
                <Slider  
                    sx={{p:0}}
                />
            <span>00:00</span>
        </Stack>
    )
};
export default memo(TimelineComponent)