import { FC } from 'react';
import { MoviesTableProps } from './types';
const { v4: uuidv4 } = require('uuid');

export const MoviesTable: FC<MoviesTableProps> = ({ movies }) => {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Duration</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, index) => (
                    <tr key={uuidv4()}>
                        <th scope="row">{index + 1}</th>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
