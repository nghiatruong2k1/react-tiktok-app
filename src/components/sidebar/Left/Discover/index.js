import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconHash, IconMusic } from '@tabler/icons';
import { Stack, Chip, Typography } from '@mui/material';
const types = {
    tag: IconHash,
    music: IconMusic,
};
const tags = [
    {
        path: '1',
        label: 'Hãy trao cho anh',
        type: 'music',
    },
    {
        path: '2',
        label: 'sontung',
    },
    {
        path: '3',
        label: 'game',
    },
    {
        path: '4',
        label: 'Save Me',
    },
    {
        path: '5',
        label: 'sontung',
    },
    {
        path: '6',
        label: 'sontung',
    },
    {
        path: '7',
        label: 'sontung',
    },
    {
        path: '8',
        label: 'MTP',
    },
];

const MAX_LENGTH_RENDER = 10;
function DiscoverComponent(props) {
    const location = useLocation();
    return (
        <Stack gap={2}>
            <Typography fontWeight="bold">
                Khám phá
            </Typography>
            <Stack
                direction={'row'}
                gap={1}
                flexWrap={'wrap'}
            >
                {tags
                    .slice(0, MAX_LENGTH_RENDER)
                    .map(({ path, label, type }, index) => {
                        const Icon =
                            types[type] || types['tag'];
                        return (
                            <Chip
                                key={index}
                                component={Link}
                                icon={<Icon />}
                                label={label}
                                to={`/tag/${path}`}
                                variant="outlined"
                            />
                        );
                    })}
            </Stack>
        </Stack>
    );
}
export default memo(DiscoverComponent);
