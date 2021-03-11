import { useState, useEffect } from 'react'
import axios from 'axios'
import './Movie.scss'
import MovieCard from '../components/MovieCard'
const Movies = () => {
    
    const [movieList, setmovieList] = useState({
        isFetched: false,
        data: {},
        error: null
    })

   
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
                api_key: 'd339cffe97396add84a8cb5480a03123'
        }
    })
    .then(function (response) {
        setmovieList({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setmovieList({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 

}, [])

console.log(movieList.data)

return (
    <div className='container'>
    {
        movieList.isFetched ? (
            <div className="movies__list">
            {
                movieList.data.results.map((movie, index) => (
                    <MovieCard 
                    key={index}
                    title={movie.title}
                    id={movie.id}
                    imgLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    rating={movie.vote_average}
                    releaseDate={movie.release_date}
                    />
                    ))
                }
                </div>
                ) : (
                    <h1>Loading...</h1>
                    )
                }
                </div>
                )
            }
            export default Movies