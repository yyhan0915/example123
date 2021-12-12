import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NoDataDisplay from './components/atom/NoDataDisplay';
import ErrorBoundary from './ErrorBoundary';
import { MainPage, SavedListPage } from './page';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/saved-pictures" element={<SavedListPage />} />
                    <Route path="*" element={<NoDataDisplay textMessage="404 Page Not found" />} />
                </Routes>
            </>
        </ErrorBoundary>
    );
};

export default App;
