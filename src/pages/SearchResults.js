import MovieCard from '../components/MovieCard/index';

const SearchResults = ({ match }) => {

    // axios.get(`https://api.themoviedb.org/movie/${match.params.id}/credits`, {
    //     params: {
    //         api_key: 'd339cffe97396add84a8cb5480a03123'
    //     }
    // })
    //     .then(function (response) {
    //         console.log(response)
    //         setratedInfo({
    //             isFetched: true,
    //             data: response.data,
    //             error: false,
    //         })
    //     })
    //     .catch(function (error) {
    //         setratedInfo({
    //             isFetched: true,
    //             data: [],
    //             error: error,
    //         })
    //     })

    return (
        <h1>Hello World</h1>
    )
}

export default SearchResults;