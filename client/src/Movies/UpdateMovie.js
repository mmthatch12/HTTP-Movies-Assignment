import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovie = (props) => {
    const[movies, setMovies] = useState({ title: '', director: '', metascore: '', stars: [] })

    useEffect(() => {
        const id = props.match.params.id;
        const itemInMovie = props.movie.find(mov => `${mov.id}` === id)
        if (itemInMovie) setMovies(itemInMovie)
    }, [props.movie , props.match.params.id])

    const changeHandler = event => {
        event.persist();
        setMovies({
            ...movies,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movies.id}`, movies)
            .then(res => console.log("res from update movie", res))
            .catch(err => console.log(err.response))
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={movies.title} placeholder='Title' onChange={changeHandler} />
            <input type='text' name='director' value={movies.director} placeholder='Director' onChange={changeHandler} />
            <input type='text' name='metascore' value={movies.metascore} placeholder='metascore' onChange={changeHandler} />
            <input type='text' name='stars' value={movies.stars} placeholder='Stars' onChange={changeHandler} />
            <button>Update</button>
        </form>
    )
}

export default UpdateMovie