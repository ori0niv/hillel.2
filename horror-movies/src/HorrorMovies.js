import React from 'react';

const HorrorMovies = () => {
    const horrorMovies = [
        {title: "The Exorcist", releaseYear: 1973 },
        {title: "Psycho", releaseYear: 1960 },
        {title: "The Shining", releaseYear: 1980 },
        {title: "A Nightmare on Elm Street", releaseYear: 1984 },
        {title: "The Conjuring", releaseYear: 2013 }
    ];

    return (
        <div className={"container mt-5"}>
            <h1 className={"text-center mb-4"}>Horror Movies</h1>
            <div className="row">
                {horrorMovies.map((movie, index) => (
                    <div key={index} className={"col-md-4 mb-4"}>
                        <div className="card">
                            <img src="https://img.freepik.com/premium-vector/banned-18-years-vector-icon-18-digit-banned-symbol_302321-2059.jpg?w=360" className="card-img-top" alt={movie.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Release: {movie.releaseYear}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HorrorMovies;