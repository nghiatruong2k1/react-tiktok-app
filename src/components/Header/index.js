import {memo,Fragment} from 'react';
import styles from './styles.module.css';
import Logo from './Logo';
import Right from './Right';
import Search from './Search';
import { Container , Grid } from '@mui/material';


function HeaderComponent(props){
    return (
        <Fragment>
            <Container maxWidth="100%" component="header" className={styles.wrapper}>
                <Container maxWidth="lg"  pb={0}>
                    <Grid container columnSpacing={1} alignItems="center">
                        <Logo xs={1.5}/>
                        <Search xs={4.5}></Search>
                        <Right xs={6}></Right>
                    </Grid>
                </Container>
            </Container>
        </Fragment>
    )
};
export default memo(HeaderComponent);