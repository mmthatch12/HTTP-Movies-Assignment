import React, { useState, useEffect } from 'react'

const UpdateMovie = ({ savedList, setSavedList }) => {
    const[movie, setMovie] = useState({ title: '', director: '', metascore: '', stars: [] })

    const changeHandler = event => {
        event.persist();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }



    return (
        <form>
            <input type='text' name='title' value={movie.title} placeholder='Title' />
            <input type='text' name='director' value={movie.director} placeholder='Director' />
            <input type='text' name='metascore' value={movie.metascore} placeholder='metascore' />
            <input type='text' name='stars' value={movie.stars} placeholder='Stars' />
        </form>
    )
}

export default UpdateMovie