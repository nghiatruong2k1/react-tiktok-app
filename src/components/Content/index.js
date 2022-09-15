import { Stack } from '@mui/material';
import { memo } from 'react';
import ScrollArea from '../ScrollArea';
function ContentComponent({ children }) {
    return (
        <>
            <ScrollArea className={'fullview'} type="hover">
                <Stack spacing={1} p={1}>
                    {children}
                </Stack>
            </ScrollArea>
        </>
    );
}
export default memo(ContentComponent);
