import { Fragment, memo } from 'react';
import {
    Stack,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { IconCircleX } from '@tabler/icons';
import { useViewportSize } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faL, faM } from '@fortawesome/free-solid-svg-icons';
const keys = [
    {
        text: 'Quay về video trước',
        icon: faChevronLeft,
    },
    {
        text: 'Đi đến video tiếp theo',
        icon: faChevronRight,
    },
    {
        text: 'Thích video',
        icon: faL,
    },
    {
        text: 'Tắt tiếng / bật tiếng video',
        icon: faM,
    },
];
function KeyBoardPopComponent({ open, onClose }) {
    const { height } = useViewportSize();
    return (
        <Dialog
            open={Boolean(open)}
            onClose={onClose}
            maxWidth="xs"
            fullWidth={true}
            scroll={height > 400 ? 'paper' : 'body'}
        >
            <DialogActions>
                <IconButton onClick={onClose}>
                    <IconCircleX size={30} />
                </IconButton>
            </DialogActions>
            <DialogContent sx={{ px: 5, py: 0.5 }}>
                <Stack spacing={1}>
                    <DialogTitle align="center" fontWeight={'bold'} sx={{ py: 0 }}>
                        Phím tắt trên bàn phím
                    </DialogTitle>
                    <List disabledPadding>
                        {keys.map((item, index) => (
                            <ListItem key={index} divider>
                                <ListItemText>{item?.text}</ListItemText>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={item?.icon} />
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}
export default memo(KeyBoardPopComponent);
