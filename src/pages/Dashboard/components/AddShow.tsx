/* eslint-disable react/jsx-no-bind */
import { Button, Input, SingleSelect } from '@medly-components/core';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddShowProps, Show } from './types';

export const AddShow: FC<AddShowProps> = ({ getShows, moviesId, movieList }) => {
    const [show, setShow] = useState<Show>({ startTime: '', movieId: 0, price: 0 });
    const [movieIdError, setError] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setShow({
            ...show,
            [e.currentTarget.id]: e.currentTarget.value
        });

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setShow({
            ...show,
            [e.currentTarget.name]: Date.parse(e.currentTarget.value)
        });

    async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        // if (show?.price === 0 && show?.movieId === 0 && show?.startTime === '') {
        try {
            await axios.post('/api/shows', show);
            setDateError('');
            setError('');
            getShows();
            setShow({ startTime: '', movieId: 0, price: 0 });
        } catch (e) {
            console.log(e);
        }
        // } else {
        //     alert('Please fill relevent data');
        // }
    }

    const options = [{ value: 0, label: 'Select' }];
    movieList?.map(movie => {
        if (movie?.title && movie.duration) {
            options.push({ value: movie.id, label: movie.title });
        }
    });

    return (
        <form className="form-inline">
            <Input type="datetime-local" name="startTime" id="date" placeholder="Date" onChange={handleDateChange} required />
            <SingleSelect
                variant="outlined"
                size="S"
                options={options}
                placeholder="Select Movie"
                onChange={value => setShow({ ...show, movieId: value })}
                id="movie"
                value={show?.movieId}
            />

            <Input type="number" placeholder="Enter Price" name="price" id="price" onChange={handleInputChange} required />
            <Button type="submit" variant="outlined" size="S" onClick={handleSubmit}>
                Add Show
            </Button>
        </form>
    );
};
