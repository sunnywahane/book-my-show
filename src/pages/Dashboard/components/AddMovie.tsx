/* eslint-disable react/jsx-no-bind */
import { Button, Input } from '@medly-components/core';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddMovieProps, Movie } from './types';

export const AddMovie: FC<AddMovieProps> = ({ getMovies }) => {
    const [movie, setMovie] = useState<Movie>({ title: '', duration: 0 });
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setMovie({
            ...movie,
            [e.currentTarget.name]: e.currentTarget.value
        });

    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (movie.duration < 5 || movie.duration > 360) {
            alert('Duration must be between 5 and 360');
            setError('Duration must be between 5 and 360');
            return;
        }
        try {
            await axios.post('/api/movies', movie);
            setError('');
            getMovies();
            setMovie({ title: '', duration: 0 });
        } catch (e) {
            console.log(e);
        }
    }
    console.log(movie);
    return (
        <form className="form-inline">
            {/* <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <input type="text" className="form-control" name="title" id="title" placeholder="Title" onChange={handleInputChange} />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="duration" className="sr-only">
                    Duration
                </label>
                <input
                    type="number"
                    className="form-control"
                    name="duration"
                    id="duration"
                    min="5"
                    max="360"
                    placeholder="Duration"
                    onChange={handleInputChange}
                />
                {error && <p className="alert alert-danger">{error}</p>}
            </div> */}
            <Input type="text" name="title" id="title" placeholder="Title" onChange={handleInputChange} required />
            {/* <Input
                type="number"
                name="duration"
                id="duration"
                min="5"
                max="360"
                placeholder="Duration"
                onChange={handleInputChange}
                required
            /> */}
            <Input type="number" name="duration" id="duration" placeholder="Duration" onChange={handleInputChange} />
            <Button type="submit" data-testid="newtest" variant="outlined" size="S" onClick={handleSubmit}>
                Add Movie
            </Button>
        </form>
    );
};
