import { Status } from './Status';

export type CandidatesDataEntry = {
    id: number;
    name: string;
    email: string;
    birth_date: string;
    year_of_experience: number;
    position_applied: string;
    application_date: string;
    status: Status;
};
