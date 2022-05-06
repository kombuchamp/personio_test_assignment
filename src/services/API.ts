import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isDev } from '../const/isDev';
import {
    API_MOCK_URL,
    API_URL,
    CANDIDATES_PATH_MOCK_URL,
    CANDIDATES_PATH_URL,
} from '../const/urls';
import { CandidatesData } from '../types/CandidatesData';

const BASE_URL = isDev ? API_MOCK_URL : API_URL;
const CANDIDATES_DATA_ENDPOINT = isDev
    ? CANDIDATES_PATH_MOCK_URL
    : CANDIDATES_PATH_URL;

/**
 * API service for fetching and caching data received from network
 *
 * Uses RTK query
 * @see https://redux-toolkit.js.org/rtk-query/overview
 */
export const API = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        fetchTableData: builder.query<CandidatesData, void>({
            query: () => ({
                url: CANDIDATES_DATA_ENDPOINT,
            }),
        }),
    }),
});
