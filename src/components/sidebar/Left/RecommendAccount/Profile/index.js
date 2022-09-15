import { memo, useRef } from 'react';
import { Link as LinkTo, useLocation } from 'react-router-dom';
import { IconCircleCheck } from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Popover,
    Card,
    CardHeader,
    CardContent,
    Button,
    Typography,
    Divider,
    Stack,
    Link,
    ListItemButton,
} from '@mui/material';
import styles from './styles.module.css';
function ProfileComponent({ name, description, avatar, id, isTicked }) {
    const location = useLocation();
    const ref = useRef();
    const [isOpen, { close, open }] = useDisclosure();
    return (
        <ListItem
            disablePadding
            divider
            ref={ref}
            onClick={(e) => {
                if (!isOpen) {
                    open();
                }
            }}
        >
            <ListItemButton component="button">
                <ListItemIcon>
                    <Avatar src={avatar} />
                </ListItemIcon>
                <ListItemText
                    secondary={description}
                    primaryTypographyProps={{
                      className:styles.link
                    }}
                    primary={
                        <>
                            {`${name} `}
                            <IconCircleCheck
                                className={clsx({ hidden: !isTicked })}
                                size={'0.9em'}
                                color="rgb(32, 213, 236)"
                            />
                        </>
                    }
                />
            </ListItemButton>
            <Popover
                open={Boolean(ref.current && isOpen)}
                disableScrollLock={false}
                anchorEl={ref.current}
                hideBackdrop
                PaperProps={{
                    component: Card,
                    onMouseLeave: (e) => {
                        close();
                    },
                    sx: {
                        width: 300,
                    },
                }}
            >
                <CardHeader
                    sx={{ pb: 1 }}
                    avatar={<Avatar src={avatar} />}
                    action={<Button variant="contained">Theo dõi</Button>}
                />
                <Divider sx={{ mx: 1 }} />
                <CardContent sx={{ pt: 1 }}>
                    <Typography >
                        <Link component={LinkTo} className={styles.link} underline='hover' to={id}>
                            {`${name} `}
                            <IconCircleCheck
                                className={clsx({ hidden: !isTicked })}
                                size={'0.9em'}
                                color="rgb(32, 213, 236)"
                            />
                        </Link>
                    </Typography>
                    <Typography>{description}</Typography>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        flexWrap={'wrap'}
                    >
                        <Typography>
                            <b>{` 1M `}</b>lượt theo dõi
                        </Typography>
                        <Typography>
                            <b>{` 1M `}</b>lượt thích
                        </Typography>
                    </Stack>
                </CardContent>
                <div></div>
            </Popover>
        </ListItem>
    );
}
export default memo(ProfileComponent);
/**            */
