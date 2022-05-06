import { Status } from './Status';

export type CandidatesDataEntry = {
    id: number;
    name: string;
    email: string;
    age: number;
    yearsOfExperience: number;
    positionApplied: string;
    applicationDate: string;
    status: Status;
};
