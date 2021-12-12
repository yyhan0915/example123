import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { MainPage, SavedListPage } from './page';

const App: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default App;
