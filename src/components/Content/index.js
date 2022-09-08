import { Container, Grid, Stack } from '@mantine/core';
import {memo} from 'react';
import styles from "./styles.module.css";
function ContentComponent({children}){
    return (
        <Stack>
           {children}
        </Stack>
    )
};export default memo(ContentComponent)