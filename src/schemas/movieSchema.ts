export type Movie = {
    id: number;
    name: string;
    durationInMinutes: number;
    releasedYear: number;
};

export type MovieCreate = {
    name: string;
    durationInMinutes: number;
    releasedYear: number;
};
