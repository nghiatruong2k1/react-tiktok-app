import { memo } from 'react';
import { Card, CardContent, Divider, Stack } from '@mui/material';
import CardVideoHeader from './Header';
import CardVideoOption from './Option';
import VideoComponent from '~/components/Video';
function CardVideoComponent({ loading, item }) {
    return (
        <>
            <Card className="relative" variant="outlined" p={1}>
                <CardVideoHeader loading={loading} />
                <CardContent>
                    <Stack direction={'row'} spacing={1}>
                        <VideoComponent loading={loading} withBorder style={{ width: 300, height: 400 }} />
                        <CardVideoOption loading={loading} />
                    </Stack>
                </CardContent>
                <CardContent>
                    <Divider mt={'md'} />
                </CardContent>
            </Card>
        </>
    );
}
export default memo(CardVideoComponent);
