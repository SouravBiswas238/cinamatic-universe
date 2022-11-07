import React from 'react';

import { useNavigate } from 'react-router-dom';

import './ShowMovie.css'

const ShowMovie = (props) => {
    const { show, score } = props.movie;

    // console.log(show.image.medium)
    const navigate = useNavigate();

    const handelCheckOutId = (id) => {
        navigate(`movie/${id}`);

    }


    return (


        <div className="col-md-3 mb-2 ">
            <div className='card'>
                <div className="card-body">
                    <img className='w-100 mx-auto radius my-img' src={show?.image.medium} alt="bike-img" />

                    <p className="fs-6 pt-1 m-1"> <span className='fs-5 font-bold'>{show?.name} </span>
                        - {show?.type} </p>

                    <p className="fs-7 p-0 m-1">{show?.genres[0]} - {show?.language} </p>

                    <p className="fs-6 p-0">Rating: {show?.rating?.average ? show?.rating?.average + "/10" : '0'} </p>


                    {/* <p className="card-text">{about.slice(0, 30)}.....</p> */}


                    <button onClick={() => handelCheckOutId(show?.id)} className="btn-sm btn view-more">view more 	&gt; </button>


                </div>
            </div>
        </div>



    );
};

export default ShowMovie;