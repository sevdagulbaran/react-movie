import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

//Static bilgiyi alacağız
// İçeride ki bilgiler daha sonra değişebileceği için state içerinde tanımlamalıyız..
/* const movies =[
    {
        'id':1,
        'name':'The Flash',
        'raiting':8.3,
        'overwiew':'After being struck by lightning, Barry Allen wakes up from his coma to discover he s been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
        'imgURL':'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {
        'id':2,
        'name':'The Flash',
        'raiting':8.3,
        'overwiew':'After being struck by lightning, Barry Allen wakes up from his coma to discover he s been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
        'imgURL':'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {
        'id':3,
        'name':'The Flash',
        'raiting':8.3,
        'overwiew':'After being struck by lightning, Barry Allen wakes up from his coma to discover he s been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
        'imgURL':'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
    }
]
 */
/* //şimdilik func. componnet
// henüz hooks öğrenmediğim için class componente çeviriyorum

const App = () =>  {
    return (
        <h1>My Movies</h1>
    )
}
 */

 class App extends React.Component{
//içerisine state tanımlıyorum ve yukarıda ki static arrayi ekliyorum
 // state bir obje olduğu için içerine eklediğim array property olarak girecek
 state = {
    movies : [
        {
            id: 1,
            name: "The Flash",
            rating: 8.3,
            overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            imageURL: 'https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg'
        },

        {
            "id": 2,
            "name": "Interstellar",
            "rating": 6.8,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        },

        {
            
            "id": 3,
            "name": "Arrow",
            "rating": 7.9,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
        },
        
        {
            "id": 4,
            "name": "Rogue",
            "rating": 7.4,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
        },

        {
            "id": 5,
            "name": "Project Power",
            "rating": 6.7,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
        },

        {
            "id": 6,
            "name": "Superman",
            "rating": 7.6,
            "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
        }
       
    ],
    searchQuery: ""
 }
//liste oluşturuyoruz: silindikten sonra kalan filimlerden oluşturacağız
//parent func child hale getirmenin en kolay yolu propstur..
 deleteMovie = (movie) => {
   const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
 
/*    //mevcut liste olmasaydı bunu kullanırdık
   this.setState({
       movies: newMovieList
   }) */
   this.setState(state => ({
       movies:newMovieList
   }))

}
searchMovie = (event) => {
    //console.log(event.target.value)
    this.setState({searchQuery: event.target.value })
}

     render(){
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
         return(
            
            <div className="container">
                <div className= "row">
                    <div className="col-lg-12"> 
                    <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>

                <MovieList
                   movies={filteredMovies}
                  deleteMovieProps ={ this.deleteMovie}  /> 
            </div>
         )
     }

 }


export default App;