import {memo} from 'react';
import {
    Grid, Stack , Container
} from '@mantine/core';
import Header from '../../Header';
import { LeftSidebar } from '../../sidebar';
import Content from '../../Content';
function Default({children}){
    return (
                <Stack className={"fullheight"} spacing={0} align="flex-start">
                    <Header />
                    <section className={"fullwidth grow"}>
                        <Container fluid className={"fullheight"}>
                            <Container size={"lg"} className={"fullheight"}>
                                <Grid className={"fullheight"}>
                                    <Grid.Col xs={3.5}>
                                        <LeftSidebar/>
                                    </Grid.Col>
                                    <Grid.Col xs={8.5}>
                                        <Content>
                                            {children}
                                        </Content>
                                    </Grid.Col>
                                </Grid>
                            </Container>
                        </Container>
                    </section>
                </Stack>
    )
};export default memo(Default)