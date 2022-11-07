import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MovieDetails = () => {
    const { id } = useParams();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movieDetails, setMovieDetails] = useState({})

    const [user] = useAuthState(auth)

    console.log(user);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setMovieDetails(data))

    }, [id]);

    console.log(movieDetails)

    return (
        <div >
            <div className='row m-0 p-2'>
                <div className='col p-2'>

                    <img className='img-fluid rounded' src={movieDetails?.image?.original} alt="bike-img" />
                </div>

                <div className='col p-2'>
                    <div>

                        <p className="fs-5 pt-1 m-1"> <span className='fs-4 fw-semibold'>{movieDetails?.name} </span>
                            - {movieDetails?.type} </p>
                        <p className="fs-6  m-1"> <span className='fs-5 '>Average Runtime:  </span>{movieDetails?.averageRuntime}
                        </p>
                        <p className="fs-6  m-1 "> <span className='fs-5'>Language:  </span> {movieDetails?.language}
                        </p>
                        <p className="fs-6  m-1 "> <span className='fs-5'>Rating:   </span> {movieDetails?.rating?.average} /10
                        </p>
                        <p className="fs-6  m-1 "> <span className='fs-5'>Average Genres:  </span> {movieDetails?.genres}
                        </p>
                        <p className="fs-6  m-1 "> <span className='fs-5'>Average Genres:  </span> {movieDetails?.url}
                        </p>
                        <p className="fs-6  m-1 ">   <a href={movieDetails?.officialSite} target="_" className="btn-sm btn-secondary"> Official Website</a>
                        </p>


                        <p className='fs-6' ><span className='fw-semibold'>Summary:</span> {movieDetails?.summary?.slice(3, -4)}</p>
                        {/* {movieDetails?.summary} */}

                        <p className='m-0'>
                            <a href={movieDetails?.url} target="_" className="btn-sm btn-secondary"> view more details</a>
                        </p>

                        <div className='py-3'>
                            <Button variant="primary" onClick={handleShow}>
                                Book a ticket
                            </Button>
                        </div>


                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Booking a ticket for <span className='text-success'> {movieDetails?.name}</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control" placeholder={user?.displayName} ></input>

                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text " >Email</span>
                        <input type="email" class="form-control" placeholder={user?.email}></input>

                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Date</span>
                        <input type="date" class="form-control" name="" id="" />
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <span className='btn'>Pay</span>
                        <span className='btn text-success'>60$</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Exit
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>


            {/* 
            <section id="general-info-panel" class="callout">

                <h2>Show Info</h2>

                <div>
                    <strong>Web channel: </strong> <img class="flag-align" src="https://static.tvmaze.com/intvendor/flags/us.png" alt="United States" title="United States"> <a href="/webchannels/2/hulu">Hulu</a>
                        <span id="year">(2018                            -
                            2018)
                        </span>
                </div>

                <div>
                    <strong>Average Runtime:</strong> 23 minutes
                </div>

                <div>
                    <strong>Status:</strong> Ended                    </div>


                <div>
                    <strong>Show Type: </strong>
                    Scripted                    </div>

                <div>
                    <strong>Genres:</strong>

                    <span class="divider">
                        <span>Comedy</span>
                    </span>
                </div>

                <div>
                    <strong>Episodes ordered:</strong> <a href="/seasons/73901/all-night-season-1">10 episodes</a>                    </div>

                <div>
                    <strong>Created by:</strong>

                    <span class="divider">
                        <span><a href="/people/186642/jason-ubaldi">Jason Ubaldi</a></span>
                    </span>
                </div>

                <p>
                    <strong>Official site:</strong> <a href="https://www.hulu.com/all-night" rel="noopener" target="_blank">www.hulu.com</a>                </p>

                <p>
                    <span class="rateit js-needlogin" data-rateit-resetable="false" data-rateit-min="0" data-rateit-max="10" data-rateit-step="1" data-rateit-value="8" data-url="/vote/vote?show_id=31428" data-unvoteurl="/vote/unvote?show_id=31428"><button id="rateit-reset-2" type="button" data-role="none" class="rateit-reset" aria-label="reset rating" aria-controls="rateit-range-2" style="display: none;"></button><span id="rateit-range-2" class="rateit-range" tabindex="0" role="slider" aria-label="rating" aria-owns="rateit-reset-2" aria-valuemin="0" aria-valuemax="10" aria-valuenow="8" aria-readonly="false" style="width: 160px; height: 16px;"><span class="rateit-selected" style="height: 16px; width: 128px;"></span><span class="rateit-hover" style="height:16px"></span></span></span><span itemscope="" itemtype="http://schema.org/AggregateRating" itemprop="aggregateRating"><meta content="10" itemprop="bestRating"> <b itemprop="ratingValue">8</b>  (<span itemprop="ratingCount">10</span> votes)</span>                </p>
            </section> */}



        </div >
    );
};

export default MovieDetails;