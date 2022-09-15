import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { IconCircleCheck, IconCircleX, IconSearch } from '@tabler/icons';
import { Divider, IconButton, InputAdornment } from '@mui/material';
function RightOptionComponent({ onClear, onSubmit }) {
    return (
        <InputAdornment sx={{ height: '100%' }} position="end">
            <IconButton
                onClick={(e) => {
                    onClear && onClear(e);
                }}
            >
                <IconCircleX size="0.7em" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
                type={'button'}
                onClick={(e) => {
                    onSubmit && onSubmit(e);
                    onClear && onClear(e);
                }}
            >
                <IconSearch />
            </IconButton>
        </InputAdornment>
    );
}
export default memo(RightOptionComponent);
