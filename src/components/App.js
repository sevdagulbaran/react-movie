import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios'

 class App extends React.Component{

    state = {
        movies: [],
        searchQuery: ""

    }

    //axios
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        console.log(response)
        this.setState({movies: response.data})

    }

    //axios
    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }


/*
    //fetch API
    async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({movies: data})

        } */

/*      //fetch API
    deleteMovie = async (movie) => {
        const baseURL = `http://localhost:3002/movies/${movie.id}`//silinen ıd
        await fetch(baseURL,{ // method mutlaka belirtilmelidir
            method: "DELETE"
        })
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    } */

   // movie yerine direk id göndermek daha mantıklı
  /*   deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    } */

    searchMovie = (event) => {
        this.setState({searchQuery: event.target.value })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                console.log(this.state.searchQuery);
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProps={this.deleteMovie} />
            </div>
        )
    }
}
export default App;