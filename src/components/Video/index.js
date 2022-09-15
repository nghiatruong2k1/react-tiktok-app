import { memo, forwardRef } from 'react';
import clsx from 'clsx';
import { Paper, Stack, IconButton, Skeleton } from '@mui/material';
import styles from './styles.module.css';
import { useDisclosure } from '@mantine/hooks';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons';
import VolumnButton from './Volumn';
import TimelineBar from './Timeline';
function VideoComponent({ loading, className, ...props }, ref) {
    const [isPlaying, handlerPlay] = useDisclosure();
    return (
        <Paper
            variant="outlined"
            component={loading ? Skeleton : 'div'}
            className={clsx([styles['video-wrapper']], {
                className: className,
            })}
            {...props}
        >
            <video className="fullview">Trình duyệt không hổ trợ</video>
            <Stack className={clsx([styles['bottom-control']], styles.control)} p={1} spacing={1}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton size="small">{isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}</IconButton>
                    <VolumnButton />
                </Stack>
                <TimelineBar />
            </Stack>
        </Paper>
    );
}
export default memo(forwardRef(VideoComponent));
