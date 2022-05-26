import { CenterAlignedLoader } from '@medly-components/core';
import { Auth, LoginCallback } from '@medlypharmacy/satellite-auth';
import { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Dashboard'));

export const Routes: FC = () => (
    <Auth>
        <Suspense fallback={<CenterAlignedLoader />}>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/implicit/callback" component={LoginCallback} />
            </Switch>
        </Suspense>
    </Auth>
);
