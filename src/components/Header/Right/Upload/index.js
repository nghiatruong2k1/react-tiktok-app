import { memo } from 'react';
import { IconPlus } from '@tabler/icons';
import { Button } from '@mui/material';
function UploadComponent(props) {
    return (
        <Button variant="outlined" startIcon={<IconPlus />}>
            Tải lên
        </Button>
    );
}
export default memo(UploadComponent);
