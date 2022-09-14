import {memo} from 'react';
import {
    Grid, Stack , Container
} from '@mui/material';
import Header from '~/components/Header';
import { LeftSidebar } from '~/components/sidebar';
import Content from '~/components/Content';
function Default({children}){
    return (
                <Stack className={"fullview"} spacing={0}>
                    <Header />
                    {/* <section className={"fullwidth grow"}>
                        <Container maxWidth="100%" className={"fullheight"}>
                            <Container maxWidth="lg"  pb={0} className={"fullheight"}>
                                <Grid container className={"fullheight"}>
                                    <Grid item xs={3.5}>
                                        <LeftSidebar/>
                                    </Grid>
                                    <Grid item xs={8.5}>
                                        <Content>
                                            {children}
                                        </Content>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </section> */}
                </Stack>
    )
};export default memo(Default)