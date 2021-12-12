import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NoDataDisplay from './components/atom/NoDataDisplay';
import ErrorBoundary from './ErrorBoundary';
import { RouteURL } from './models/types';
import { MainPage, SavedListPage } from './page';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <>
                <CssBaseline />
                <Routes>
                    <Route path={RouteURL.HOME} element={<MainPage />} />
                    <Route path={RouteURL.SAVED_PICTURE_LIST} element={<SavedListPage />} />
                    <Route path="*" element={<NoDataDisplay textMessage="404 Page Not found" />} />
                </Routes>
            </>
        </ErrorBoundary>
    );
};

export default App;
