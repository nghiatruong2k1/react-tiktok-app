import { memo, useRef } from 'react';
import {} from '@mantine/core';
import { IconButton, Slider, Popper, Stack, Paper } from '@mui/material';
import { IconVolume, IconVolume2, IconVolumeOff } from '@tabler/icons';
import { useDisclosure, useInputState, useToggle } from '@mantine/hooks';
function VolumnButtonComponent(props) {
    const [isOpen, { close, open }] = useDisclosure(false);
    const [numberVol, setVol] = useInputState(0);
    const [isMutex, toggleMutex] = useToggle([false, true]);
    const ref = useRef();
    return (
        <span
            onMouseEnter={(e) => {
                if (!isOpen) {
                    open();
                }
            }}
            onMouseLeave={(e) => {
                if (isOpen) {
                    close();
                }
            }}
        >
            <IconButton
                onClick={() => {
                    toggleMutex();
                }}
                ref={ref}
                size="small"
            >
                {numberVol === 0 || isMutex ? <IconVolumeOff /> : numberVol > 40 ? <IconVolume /> : <IconVolume2 />}
            </IconButton>
            <Popper
                open={ref.current && isOpen}
                onClose={() => {
                    close();
                }}
                anchorEl={ref.current}
                disablePortal
                placement="top"
            >
                <Paper
                    variant={'outlined'}
                    style={{
                        overflow: 'unset',
                        height: 80,
                        padding: '8px 6px',
                        width: 'auto',
                        borderRadius: '100em',
                    }}
                >
                    <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
                        <Slider
                            sx={{
                                p: 0,
                                '& input[type="range"]': {
                                    WebkitAppearance: 'slider-vertical',
                                },
                            }}
                            orientation="vertical"
                            value={numberVol}
                            onChange={(event, newValue) => {
                                setVol(newValue);
                            }}
                            step={1}
                            min={0}
                            max={100}
                        />
                    </Stack>
                </Paper>
            </Popper>
        </span>
    );
}
export default memo(VolumnButtonComponent);
//
