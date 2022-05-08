export type Status = 'approved' | 'rejected' | 'waiting';

export const isStatus = (value: unknown): value is Status => {
    if (['approved', 'rejected', 'waiting'].includes(value as Status)) {
        return true;
    }
    return false;
};
