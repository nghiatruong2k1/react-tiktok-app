import { Routes, Route, useLocation } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { publicRoutes } from '~/routers';
import { DefaultLayout } from '~/components/layout';
import { SetTitle } from '~/config/SetTitle/';
function App() {
    const location = useLocation();
    useEffect(() => {
        SetTitle();
    }, [location]);
    return (
        <>
            <Routes>
                {publicRoutes.map(({ layout, path, page }, index) => {
                    const Layout = layout === null ? Fragment : layout ?? DefaultLayout;
                    const Page = page;
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
