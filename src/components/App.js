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
        },
        {
            'id':4,
            'name':'The Flash',
            'raiting':8.3,
            'overwiew':'After being struck by lightning, Barry Allen wakes up from his coma to discover he s been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
            'imgURL':'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
        },
        {
            'id':5,
            'name':'The Flash',
            'raiting':8.3,
            'overwiew':'After being struck by lightning, Barry Allen wakes up from his coma to discover he s been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
            'imgURL':'https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'
        }
    ],
 }

     render(){
         return(
            
            <div className="container">
                <div className= "row">
                    <div className="col-lg-12"> 
                    <SearchBar/>
                    </div>
                </div>
                <MovieList
                  movies= {this.state.movies} /> 
            </div>
         )
     }

 }


export default App;