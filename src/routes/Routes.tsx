import { Header, PageLayout, SideNav } from '@components';
import { CenterAlignedLoader } from '@medly-components/core';
import { Auth, LoginCallback, LoginPage } from '@medlypharmacy/satellite-auth';
import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Dashboard'));

export const Routes: FC = () => (
    <Auth>
        <Suspense fallback={<CenterAlignedLoader />}>
            <Switch>
                <PageLayout>
                    <SideNav />
                    <Header />
                    <Route
                        path="/"
                        exact={true}
                        render={routeProps => (
                            <LoginPage
                                forInternalApps
                                header="Sign in to Medly App"
                                authenticatedRedirectPathname="/dashboard"
                                {...routeProps}
                            />
                        )}
                    />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/implicit/callback" component={LoginCallback} />
                </PageLayout>
            </Switch>
        </Suspense>
    </Auth>
);
