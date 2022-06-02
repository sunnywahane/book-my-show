export type DashboardProps = {
    isLoading?: boolean;
};

export interface IMovie {
    id: number;
    title: string;
    duration: number;
}

export interface IShow {
    id: number;
    startTime: string;
    movieId: number;
    price: number;
}
