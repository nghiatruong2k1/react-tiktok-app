import {memo} from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './styles.module.css';
const hiddens = {
    x:true,
    y:true
}
function ScrollAreaComponent({hidden = '',isHover = true,classes = {},children}){
    const {wrapper,view} = classes;
    return (
        <Box className={ clsx(styles.wrapper,{wrapper:wrapper}) }>
            <Box className={ clsx(styles.view,{
                    view:view,
                    [styles[`hidden-${hidden}`]]:hiddens[hidden],
                    [styles['view-hover']]:isHover
                })}
            >
                <Box>{children}</Box>
            </Box>
        </Box>
    )
};export default memo(ScrollAreaComponent)