/* eslint-disable react/jsx-no-bind */
import { Button, Input, SingleSelect } from '@medly-components/core';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddShowProps, Show } from './types';

export const AddShow: FC<AddShowProps> = ({ getShows, moviesId, movieList }) => {
    const [show, setShow] = useState<Show>({ startTime: '', movieId: 0, price: 0, movieLanguage: '', movieType: '' });
    const [movieIdError, setError] = useState<string>('');
    const [dateError, setDateError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setShow({
            ...show,
            [e.currentTarget.id]: e.currentTarget.value
        });
    console.log(show.movieLanguage);
    console.log(show.movieType);
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
            setShow({ startTime: '', movieId: 0, price: 0, movieLanguage: '', movieType: '' });
        } catch (e) {
            console.log(e);
            alert('Faild to add show');
        }
        // } else {
        //     alert('Please fill relevent data');
        // }
    }

    const options = [{ value: 0, label: 'Select' }];
    const languageOptions = [
        { value: '', label: 'Select' },
        { value: 'English', label: 'English' }
    ];
    const typesOptions = [
        { value: '', label: 'Select' },
        { value: '2-D', label: '2-D' }
    ];
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
            <SingleSelect
                variant="outlined"
                size="S"
                options={languageOptions}
                placeholder="Select Language"
                onChange={value => setShow({ ...show, movieLanguage: value })}
                id="movie"
                value={show?.movieLanguage}
            />
            <SingleSelect
                variant="outlined"
                size="S"
                options={typesOptions}
                placeholder="Select Type"
                onChange={value => setShow({ ...show, movieType: value })}
                id="movie"
                value={show?.movieType}
            />

            <Input type="number" placeholder="Enter Price" name="price" id="price" onChange={handleInputChange} required />
            <Button type="submit" variant="outlined" size="S" onClick={handleSubmit}>
                Add Show
            </Button>
        </form>
    );
};
