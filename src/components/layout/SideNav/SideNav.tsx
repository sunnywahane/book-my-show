import { Text } from '@medly-components/core';
import { DashboardIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import { WithStyle } from '@medly-components/utils';
import { useAuthContext } from '@medlypharmacy/satellite-auth';
import React, { FC, memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Component: FC = memo(() => {
    const { pathname } = useLocation(),
        { authState } = useAuthContext(),
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);
    return authState?.isAuthenticated ? (
        <MedlySideNav onChange={handlePathChange} active={pathname} defaultActive="/">
            <MedlySidenavHeader />
            <MedlySideNav.List>
                <MedlySideNav.Nav path="/">
                    <DashboardIcon />
                    <Text>Dashboard</Text>
                </MedlySideNav.Nav>
            </MedlySideNav.List>
        </MedlySideNav>
    ) : null;
});

Component.displayName = 'AppSideNav';
export const SideNav: FC & WithStyle = Object.assign(Component, {
    Style: MedlySideNav.Style
});
