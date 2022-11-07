import React from 'react';

const MovieSlider = () => {
    return (
        <div class="carousel slide"><div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button></div><div class="carousel-inner"><div class="active carousel-item"><img class="d-block w-100 h-50" src="/static/media/1.6c71f41d324b0a3a00de.jpg" alt="First slide"><div class="carousel-caption"><h3>Bike Directory</h3><p>High Speed Electric Sport Racing Motorcycle Motorbike</p></div></div><div class="carousel-item"><img class="d-block w-100 h-50" src="/static/media/2.476d2d7b4976e9ca396d.jpg" alt="Second slide"><div class="carousel-caption"><h3>Sourav Motor</h3><p>High Speed Electric Sport Racing Motorcycle Motorbike</p></div></div><div class="carousel-item"><img class="d-block w-100 h-50" src="/static/media/3.3928d20d26d70d82e86b.jpg" alt="Third slide"><div class="carousel-caption"><h3>Sourav Motor</h3><p>High Speed Electric Sport Racing Motorcycle Motorbike</p></div></div></div><a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div>
    );
};

export default MovieSlider;