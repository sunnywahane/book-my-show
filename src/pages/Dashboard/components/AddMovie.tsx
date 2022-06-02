/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddMovieProps, Movie } from './types';

export const AddMovie: FC<AddMovieProps> = ({ getMovies }) => {
    const [movie, setMovie] = useState<Movie>({ title: '', duration: 1 });
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setMovie({
            ...movie,
            [e.currentTarget.name]: e.currentTarget.value
        });

    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (movie.duration < 5 || movie.duration > 360) {
            setError('Duration must be between 5 and 360');
            return;
        }
        try {
            await axios.post('/api/movies', movie);
            setError('');
            getMovies();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
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
            </div>
            <button type="submit" data-testid="newtest" className="btn btn-primary mb-2" onClick={handleSubmit}>
                Add Movie
            </button>
        </form>
    );
};
