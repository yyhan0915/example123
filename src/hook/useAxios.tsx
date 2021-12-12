import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import deepEqual from 'deep-equal';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const { CancelToken } = axios;

interface AxiosProps<P> {
    response: AxiosResponse<P> | null;
    error: AxiosError | null;
    isLoading: boolean;
}

export interface AxiosState<P> {
    data?: P;
    response: AxiosResponse<P> | null;
    error: AxiosError | null;
    isLoading: boolean;
    refetch: (config?: AxiosRequestConfig) => Promise<AxiosResponse<P>> | unknown;
}

/**
 * Params
 * @param {string} url - API url address
 * @param {AxiosRequestConfig} [axiosConfig={}] - (optional) config values of axios(method, params, data, ...)
 * @param {boolean} [manualFetch=false] - (optional) manually trigger fetch
 */

export function useAxios<P>(url: string, axiosConfig: AxiosRequestConfig = {}, manualFetch = false): AxiosState<P> {
    const [axiosState, setAxiosState] = useState<AxiosProps<P>>({
        response: null,
        error: null,
        isLoading: !manualFetch,
    });
    const configRef = useRef(axiosConfig);
    const manualFetchRef = useRef(manualFetch);

    const configEqual: boolean = useMemo(
        () => deepEqual(configRef.current, axiosConfig, { strict: true }),
        [axiosConfig],
    );

    if (!configEqual) configRef.current = axiosConfig;

    const fetch = useCallback(
        async (config: AxiosRequestConfig): Promise<AxiosResponse<P> | AxiosError | unknown> => {
            setAxiosState(state => ({ ...state, isLoading: true }));
            let response = null;
            try {
                response = await axios({
                    url,
                    ...config,
                    cancelToken: CancelToken.source().token,
                });
                setAxiosState({ response, error: null, isLoading: false });
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    if (axios.isCancel(error)) {
                        console.info('Request canceled by cleanup: ', error.message);
                    } else {
                        setAxiosState({ error, response: null, isLoading: false });
                        console.info(error.message);
                    }
                }
                return error;
            }

            return response;
        },
        [url],
    );

    const refetch = useCallback(
        async (config?: AxiosRequestConfig): Promise<AxiosResponse<P> | AxiosError | unknown> => {
            // 추가된 config 값과 병합하여 반영
            configRef.current = { ...configRef.current, ...config };
            return fetch(configRef.current);
        },
        [fetch],
    );

    // url, config 값이 변경되었을 때 호출됨
    useEffect(() => {
        // 수동호출인 경우 useEffect를 수행하지 않음
        if (manualFetchRef.current) return;

        fetch(configRef.current);

        return () => {
            CancelToken.source().cancel('useEffect cleanup');
        };
    }, [fetch]);

    const { response, error, isLoading } = axiosState;
    const data = response?.data;

    return { data, response, error, isLoading, refetch };
}
