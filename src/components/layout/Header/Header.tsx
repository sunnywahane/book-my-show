import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import * as Styled from './Header.styled';
import { useAuthContext } from '@medlypharmacy/satellite-auth';

const Component: FC = () => {
    const {
        authState: { isAuthenticated }
    } = useAuthContext();

    return isAuthenticated ? (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Book My Show
                </Text>
            </Styled.LeftSide>
            <Styled.RightSide>
                <Avatar size="M">JD</Avatar>
            </Styled.RightSide>
        </Styled.Header>
    ) : null;
};

Component.displayName = 'Header';
export const Header: FC & WithStyle = Object.assign(Component, {
    Style: Styled.Header
});
