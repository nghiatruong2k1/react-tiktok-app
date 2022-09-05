import {memo,Fragment} from 'react';
import clsx from 'clsx';
import {Button} from "@mantine/core";
import {IconPlus} from "@tabler/icons";
function UploadComponent(props){
    return (
        <Button variant="outline" leftIcon={<IconPlus />} size="lg" compact>
            Tải lên
        </Button>
    )
};export default memo(UploadComponent)