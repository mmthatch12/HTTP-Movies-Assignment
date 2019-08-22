import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovie = (props) => {
    const[movies, setMovies] = useState({ title: '', director: '', metascore: '', stars: [], id: '' })

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
            .then(res => {
                console.log("res from update movie", res.data)
                const newArray = props.movie.filter(mov => mov.id !== res.data.id)
                
                newArray.unshift(res.data)
                props.setMovie(newArray)
                console.log('newArray', newArray)
                props.history.push('/')
                })


            .catch(err => console.log(err.response))
    }

    const starsHandler = (ind, event) => {
        const updateStars = [...movies.stars]
        updateStars[ind] = event.target.value
        setMovies({
            ...movies,
            stars: updateStars
        })
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={movies.title} placeholder='Title' onChange={event => changeHandler(event)} />
            <input type='text' name='director' value={movies.director} placeholder='Director' onChange={event => changeHandler(event)} />
            <input type='text' name='metascore' value={movies.metascore} placeholder='metascore' onChange={event => changeHandler(event)} />
            <input type='text' name='stars' value={movies.stars} placeholder='Stars' onChange={event => starsHandler(event)} />
            <button>Update</button>
        </form>
    )
}

export default UpdateMovie