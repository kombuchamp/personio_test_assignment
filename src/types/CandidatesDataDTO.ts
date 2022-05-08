import { CandidatesDataEntryDTO } from './CandidatesDataEntryDTO';

/**
 * Candidates data returned from server
 *
 * NOTE: for some reason server somtimes responses with status 200 and field "error" with
 * field code containing "500" there and error message.
 * Cannot say I would recommend this approach (probably, using HTTP for transfering error messages would be
 * a more common way to do that), but not that it's a big problem to support
 */
export type CandidatesDataDTO = {
    data: CandidatesDataEntryDTO[];
    error: { code: string; message: string };
};
