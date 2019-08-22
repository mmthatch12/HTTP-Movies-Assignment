import React, { useState, useEffect } from 'react'

const UpdateMovie = ({}) => {
    const[movie, setMovie] = useState({ title: '', director: '', metascore: '', stars: [] })



    return (
        <form>
            <input type='text' name='title' value={movie.title} placeholder='Title' onChange={} />
            <input type='text' name='director' value={movie.director} placeholder='Director' onChange={} />
            <input type='text' name='metascore' value={movie.metascore} placeholder='metascore' onChange={} />
            <input type='text' name='stars' value={movie.stars} placeholder='Stars' onChange={} />
        </form>
    )
}

export default UpdateMovie