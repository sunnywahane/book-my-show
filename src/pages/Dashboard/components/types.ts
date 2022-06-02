/* eslint-disable @typescript-eslint/ban-types */
import { IMovie, IShow } from '../types';

export type MoviesTableProps = {
    movies: IMovie[];
};

export interface Movie {
    title: string;
    duration: number;
}

export interface Show {
    startTime: string;
    movieId: number;
    price: number;
}

export type ShowTableProps = {
    movies: IMovie[];
    shows: IShow[];
};

export type AddMovieProps = {
    getMovies: Function;
};

export type AddShowProps = {
    getShows: Function;
    moviesId: number[];
    movieList: IMovie[];
};
