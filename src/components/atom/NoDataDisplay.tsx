import { Box, Button, styled } from '@mui/material';
import { AxiosRequestConfig } from 'axios';
import React from 'react';

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 14,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
}));

interface IProps {
    textMessage?: string;
    hasRetryButton?: boolean;
    retryHandler?: (config?: AxiosRequestConfig) => unknown;
}

const NoDataDisplay: React.FC<IProps> = ({ textMessage, hasRetryButton, retryHandler }) => {
    return (
        <StyledBox
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
            <span>{textMessage || 'Oops, there is no data yet'}</span>
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
        </StyledBox>
    );
};

export default NoDataDisplay;
