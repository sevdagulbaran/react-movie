import React from 'react';

//artık state kullanmadığımız için funct componente çevirebilirz this, render, class-extends kaldırıp const arrow funct haline getiriyoruz

const MovieList = (props) => {

 /* const handleClick = (e) => {
       // console.log('try it')
    } */



        return (
         <div className="row">
                    { props.movies.map((movie,i) =>(
                    <div className="col-lg-4" key = {i} >
                        <div className="card mb-4 shadow-sm">
                          <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                          <div className="card-body">
                                <h5 className="card-title">{movie.name} </h5>
                                <p className="card-text">{movie.overview}</p>
                                 <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick= {() => props.deleteMovieProps(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">{movie.rating}</span></h2>
                                </div>
                             </div>
                        </div>
                    </div>
                    ))}

                </div>
        )
}
export default MovieList;