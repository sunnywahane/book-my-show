import { CenterAlignedLoader } from '@medly-components/core';
import { Auth, LoginCallback, LoginPage } from '@medlypharmacy/satellite-auth';
import { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Dashboard'));

export const Routes: FC = () => (
    <Auth>
        <Suspense fallback={<CenterAlignedLoader />}>
            <Switch>
                <Route
                    path="/"
                    exact={true}
                    render={routeProps => (
                        <LoginPage
                            forInternalApps={true}
                            header="Sign in to Medly App"
                            authenticatedRedirectPathname="/dashboard"
                            {...routeProps}
                        />
                    )}
                />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/implicit/callback" component={LoginCallback} />
            </Switch>
        </Suspense>
    </Auth>
);
