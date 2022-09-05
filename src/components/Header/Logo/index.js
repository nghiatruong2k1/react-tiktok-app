import {memo} from 'react';
import { Grid,Image,Text,NavLink } from '@mantine/core';
import styles from './styles.module.css';
import { Link} from 'react-router-dom';
function LogoComponent(props){
    return (
        <Grid.Col {...props}>
            <div className={styles.wrapper}>
                <Image 
                    alt={process.env.REACT_APP_WEBSITE_NAME}
                    placeholder={<Text align="center">{process.env.REACT_APP_WEBSITE_NAME}</Text>}
                    src='/tiktok-logo.png'
                    withPlaceholder
                    fit="contain"
                />
                <NavLink 
                    className={styles.link}
                    component={Link}
                    to={"/"}
                />
            </div> 
        </Grid.Col>
    )
};export default memo(LogoComponent)