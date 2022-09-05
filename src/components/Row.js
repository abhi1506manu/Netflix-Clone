import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './Row.css'

const base_url ="https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which run based on a specific condition
    useEffect(() => {
        // [] run onces when row loads
        async function fechData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fechData()

    }, [fetchUrl]);
    // console.log(movies)

    return (
        <div className='row'>
            {/* titles */}
            <h2>{title}</h2>
           <div className='row_posters'>
            {/* row_poster */}
            {movies.map(movie =>(
                <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                 src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`}
                  alt={movie.name}
                  />

            ))}
           </div>
        </div>
    )
}

export default Row