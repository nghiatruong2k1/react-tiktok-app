import {memo,Fragment} from 'react';
import {  
    Header,
    Container,
    Grid
} from '@mantine/core';
import styles from './styles.module.css';
import Logo from './Logo';
import Right from './Right';
import Search from './Search';
function HeaderComponent(props){
    return (
        <Fragment>
            <Header className={styles.wrapper}>
                <Container className={styles.container} size={'lg'}>
                    <Grid align="center">
                        <Logo xs={1.5}/>
                        <Search xs={4.5}></Search>
                        <Right xs={6}></Right>
                    </Grid>
                </Container>
            </Header>
        </Fragment>
    )
};
export default memo(HeaderComponent);