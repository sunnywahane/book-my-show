import { ErrorBoundary } from '@components';
import { CssBaseline } from '@medly-components/core';
import Routes from '@routes';
import { defaultTheme } from '@theme';
import type { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const App: FC = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <CssBaseline />
            <Router>
                <ErrorBoundary>
                    <Routes />
                </ErrorBoundary>
            </Router>
        </>
    </ThemeProvider>
);

export default App;
