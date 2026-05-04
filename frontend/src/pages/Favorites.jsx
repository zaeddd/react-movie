import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';    

function Favorites() {
    const { favorites } = useMovieContext();
    
    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }


    return (
        <div className="favorites-empty">
            <h1>My Favorites</h1>
            <p>This is where your favorite movies will be displayed.</p>
        </div>
    );
}


export default Favorites