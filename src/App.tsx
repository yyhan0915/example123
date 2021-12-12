import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { MainPage, SavedListPage } from './page';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/saved-pictures" element={<SavedListPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </ErrorBoundary>
    );
};

export default App;
