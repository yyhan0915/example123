import React from 'react';
import { AppLayout } from 'src/components/Layout';

interface IProps {
    sample?: string;
}

const SavedListPage: React.VFC<IProps> = () => {
    return <AppLayout>saved page</AppLayout>;
};

export default SavedListPage;
