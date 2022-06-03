/* eslint-disable react/jsx-no-bind */
import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddShowProps, Show } from './types';

export const AddShow: FC<AddShowProps> = ({ getShows, moviesId }) => {
    const [show, setShow] = useState<Show>({ startTime: '', movieId: 0 });
    const [movieIdError, setError] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setShow({
            ...show,
            [e.currentTarget.name]: e.currentTarget.value
        });

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setShow({
            ...show,
            [e.currentTarget.name]: Date.parse(e.currentTarget.value)
        });

    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            await axios.post('/api/shows', show);
            setDateError('');
            setError('');
            getShows();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="Movie" className="sr-only">
                    Title
                </label>
                <input
                    type="datetime-local"
                    className="form-control"
                    name="startTime"
                    id="date"
                    placeholder="Date"
                    onChange={handleDateChange}
                />
                {dateError && <p className="alert alert-danger">{dateError}</p>}
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="Movie" className="sr-only">
                    Movie Id
                </label>
                <input
                    type="number"
                    className="form-control"
                    name="movieId"
                    id="movie"
                    min="1"
                    placeholder="Movie"
                    onChange={handleInputChange}
                />
                {movieIdError && <p className="alert alert-danger">{movieIdError}</p>}
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>
                Add Show
            </button>
        </form>
    );
};
