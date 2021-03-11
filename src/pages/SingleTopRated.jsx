import { useState, useEffect } from 'react'
import axios from 'axios'



const SingleTopRated = ({ match }) => {
    
    
    const [ratedInfo, setratedInfo] = useState({
        isFetched: false, 
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/movie/${match.params.id}/credits`, {
        params: {
                api_key: 'd339cffe97396add84a8cb5480a03123'
        }
    })
    .then(function (response) {
        console.log(response)
        setratedInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setratedInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 
    
}, [])
console.log(ratedInfo.data.results);

return (
    <>
    <div className="container">
          {
              ratedInfo.isFetched ? (
                <h1>Hello
                </h1>
                ) : (
                    <h1>Loading...</h1>  
                    ) 
          }
      </div>
    </>
    )
}





export default SingleTopRated