import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovie = ({ savedList, setSavedList }) => {
    const[movie, setMovie] = useState({ title: '', director: '', metascore: '', stars: [] })

    // useEffect(() => {
    //     const id = props.match.params.id;
    //     const itemInMovie = props.
    // }, [])

    const changeHandler = event => {
        event.persist();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => console.log("res from update movie", res))
            .catch(err => console.log(err.response))
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={movie.title} placeholder='Title' onChange={changeHandler} />
            <input type='text' name='director' value={movie.director} placeholder='Director' onChange={changeHandler} />
            <input type='text' name='metascore' value={movie.metascore} placeholder='metascore' onChange={changeHandler} />
            <input type='text' name='stars' value={movie.stars} placeholder='Stars' onChange={changeHandler} />
            <button>Update</button>
        </form>
    )
}

export default UpdateMovie