import {memo} from 'react';
import styles from './styles.module.css';
import { Grid } from '@mui/material';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
function LogoComponent(props){
    return (
        <Grid item {...props}>
            <div className={styles.wrapper}>
                <Image 
                    alt={process.env.REACT_APP_WEBSITE_NAME}
                    placeholder={process.env.REACT_APP_WEBSITE_NAME}
                    src='/tiktok-logo.png'
                    withPlaceholder
                    fit="contain"
                    height={"4rem"}
                />
                <Link to={"/"} className={styles.link}/>
            </div> 
        </Grid>
    )
};export default memo(LogoComponent)