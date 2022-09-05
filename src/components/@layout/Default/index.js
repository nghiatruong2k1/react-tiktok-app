import {memo} from 'react';
import Header from '../../Header';
import { LeftSidebar } from '../../@sidebar';
import Content from '../../Content';
import {
    Container, Grid
} from '@mantine/core';
function Default({children}){
    return (
        <Container fluid>
            <Header />
            <Container size={'lg'}>
                <Grid>
                    <Grid.Col xs={4}>
                        <LeftSidebar/>
                    </Grid.Col>
                    <Grid.Col xs={8}>
                        <Content>{children}</Content>
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    )
};export default memo(Default)