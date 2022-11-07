import React, { useEffect, useState } from 'react';
import './Home.css'
import banner_img from '../../img/1920_400.jpg'
import ShowMovie from './AllMovie/ShowMovie';

const Home = () => {


    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))

    }, []);
    console.log(movies)

    return (
        <div className='home'>
            <div className='home-banner '>
                <img className='banner-img' src={banner_img} alt="banner" />
            </div>

            <div className='sl-section'>
                <div className='sl-section-title'>
                    <h2 className='headline'>MOVIES</h2>
                </div>
                <div className='all-movies'>
                    <div class="sl-section-tabs">
                        <ul role="tablist" class="">

                            <li role="tab" tabindex="0" class="ui-tabs-tab ui-tabs-active" aria-selected="true" aria-expanded="true"><a href="#now_showing" role="presentation" tabindex="-1" class="ui-tabs-anchor" id="ui-id-1">Now Showing</a></li>

                            <li role="tab" tabindex="-1" class="ui-tabs-tab" aria-controls="coming_soon" aria-labelledby="ui-id-2" aria-selected="false" ><a href="#coming_soon" role="presentation" tabindex="-1">Coming Soon</a></li>
                        </ul>
                    </div>
                    <div className='container'>
                        <div className="row">
                            {
                                movies.slice(0, 8).map(movie => <ShowMovie key={movie.score} movie={movie}></ShowMovie>)
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;