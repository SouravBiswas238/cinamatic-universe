import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal';

const MovieDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setMovieDetails(data))

    }, [id]);

    console.log(movieDetails)

    return (
        <div className="d-flex">
            <div>

                <img className='img-fluid' src={movieDetails?.image?.original} alt="bike-img" />
            </div>
            <div>


                <p className="fs-6 pt-1 m-1"> <span className='fs-5 font-bold'>{movieDetails?.name} </span>
                    - {movieDetails?.type} </p>



                <button className='btn btn-primary'>Book</button>
                <BookingModal></BookingModal>

            </div>





        </div>
    );
};

export default MovieDetails;