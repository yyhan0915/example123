import { Component, ErrorInfo } from 'react';
import { Box } from '@mui/material';

class ErrorBoundary extends Component<{}, { hasError: boolean; error?: Error }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
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
