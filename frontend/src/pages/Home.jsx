import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2010"},
        {id: 2, title: "Avengers", release_date: "2021"},
        {id: 3, title: "Iron Man", release_date: "2023"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
        setSearchTerm("");
    }

    return (
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home