import React from 'react';
import { AppLayout } from 'src/components/Layout';

interface IProps {
    sample?: string;
}

const MainPage: React.VFC<IProps> = () => {
    return <AppLayout>main page</AppLayout>;
};

export default MainPage;
