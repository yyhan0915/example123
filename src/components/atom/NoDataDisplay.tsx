import { Box, Button } from '@mui/material';
import { AxiosRequestConfig } from 'axios';
import React from 'react';

interface IProps {
    textMessage?: string;
    hasRetryButton?: boolean;
    retryHandler?: (config?: AxiosRequestConfig) => unknown;
}

const NoDataDisplay: React.FC<IProps> = ({ textMessage, hasRetryButton, retryHandler }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                fontSize: 14,
                width: '100%',
                height: '100%',
                flexDirection: 'column',
            }}
        >
            <span>{textMessage || 'Ooops, there is no data yet'}</span>
            {hasRetryButton && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (retryHandler) {
                            retryHandler();
                        }
                    }}
                    sx={{ marginTop: 2 }}
                >
                    Retry
                </Button>
            )}
        </Box>
    );
};

export default NoDataDisplay;
