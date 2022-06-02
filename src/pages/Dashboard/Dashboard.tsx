/* eslint-disable react/jsx-no-bind */
import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { AddMovie, AddShow, MoviesTable } from './components';
import { ShowsTable } from './components/ShowTables';
import { DashboardProps, IMovie, IShow } from './types';

export const Dashboard: FC<DashboardProps> = ({ isLoading }) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [shows, setShows] = useState<IShow[]>([]);

    async function getMovies() {
        try {
            const res = await axios.get('/api/movies');
            setMovies(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function getShows() {
        try {
            const res = await axios.get('/api/shows');
            setShows(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovies();
        getShows();
    }, []);

    return (
        <PageContent isLoading={isLoading}>
            <Text textWeight="Strong" textVariant="body1">
                Add Movie
            </Text>
            <AddMovie getMovies={getMovies} />
            <Text textWeight="Strong" textVariant="body1">
                Movies List
            </Text>
            <MoviesTable movies={movies} />
            <Text textWeight="Strong" textVariant="body1">
                Show List
            </Text>
            <AddShow getShows={getShows} moviesId={movies.map(it => it.id)} />
            <ShowsTable movies={movies} shows={shows} />
        </PageContent>
    );
};
Dashboard.displayName = 'Dashboard';
