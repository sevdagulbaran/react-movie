import React from 'react';



class MovieList extends React.Component{
    
    
    
    
    render(){
        return(
                <div className="row">
                    {this.props.movies.map((movie) =>(

                    <div className="col-lg-4" >
                        <div className="card mb-4 shadow-sm">
                          <img src='' className="card-img-top" alt="Sample Movie" />
                          <div className="card-body">
                                <h5 className="card-title">Sample Movie </h5>
                                <p className="card-text"> Description</p>
                                 <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">8.4</span></h2>

                                </div>
                             </div>
                        </div>
                    </div>
                    ))}
    
                </div>
        )
    }
}
export default MovieList;