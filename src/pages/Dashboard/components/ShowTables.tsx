import { FC } from 'react';
import { ShowTableProps } from './types';
const { v4: uuidv4 } = require('uuid');

export const ShowsTable: FC<ShowTableProps> = ({ movies, shows }) => {
    return (
        <>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Start time</th>
                        <th scope="col">Movie</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((show, index) => (
                        <tr key={uuidv4()}>
                            <th scope="row">{index + 1}</th>
                            <td>{show.startTime}</td>
                            <td>{show.movieId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
