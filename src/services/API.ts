import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isDev } from '../const/isDev';
import {
    API_MOCK_URL,
    API_URL,
    CANDIDATES_PATH_MOCK_URL,
    CANDIDATES_PATH_URL,
} from '../const/urls';
import { CandidatesDataDTO } from '../types/CandidatesDataDTO';
import { CandidatesData } from '../types/CandidatesData';
import { useMemo } from 'react';

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
        fetchTableData: builder.query<CandidatesDataDTO, void>({
            query: () => ({
                url: CANDIDATES_DATA_ENDPOINT,
            }),
        }),
    }),
});

export type UseCandidatesData = () => {
    data: CandidatesData | undefined;
    isLoading: boolean;
    isError: boolean;
};

/**
 * Loads and parses candidate data
 *
 * NOTE: by using data transfer objects (concept from DDD) and using separate types for
 * objects returned from server (DTO-s) and data we are going to be using throughout an application
 * we can be independent of the way server transfers data to frontend. If it will be decided that
 * API should switch to other naming convention or use XML over JSON, all we have to do is to rewrite this
 * mapper.
 * In this application I decided to bootstrap this mapping in these wrapper hooks
 */
export const useCandidatesData: UseCandidatesData = () => {
    // NOTE: RTK Query caches requests internally. Object "data" has persistent reference
    const { isLoading, isError, data } = API.useFetchTableDataQuery();

    const mappedData = useMemo(() => {
        if (data === undefined) {
            return undefined;
        }
        return parseCandidatesData(data);
    }, [data]);

    return {
        isLoading,
        isError,
        data: mappedData,
    };
};

function parseCandidatesData(data: CandidatesDataDTO): CandidatesData {
    const { data: dataArray } = data;

    return dataArray.map(
        ({
            id,
            name,
            application_date,
            birth_date,
            position_applied,
            status,
            year_of_experience,
            email,
        }) => ({
            id,
            name,
            email,
            status,
            age: formatAge(birth_date),
            applicationDate: application_date,
            positionApplied: position_applied,
            yearsOfExperience: year_of_experience,
        })
    );
}

function formatAge(birthDateString: string) {
    const ageMilliseconds = Date.now() - Number(new Date(birthDateString));
    const ageFromEpoch = new Date(ageMilliseconds);
    return Math.abs(ageFromEpoch.getUTCFullYear() - 1970);
}
