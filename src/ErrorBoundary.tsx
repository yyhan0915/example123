import { Component, ErrorInfo, ReactNode } from 'react';
import { Box } from '@mui/material';

interface IError {
    hasError: boolean;
    error?: Error;
}

interface IProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<IProps, IError> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): IError {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Box padding="300px 80px" textAlign="center">
                    <h2>Something went wrong.</h2>
                    <h3>Please reload page and try again.</h3>
                    <h3>
                        {this.state.error?.name} : {this.state.error?.message}
                    </h3>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
