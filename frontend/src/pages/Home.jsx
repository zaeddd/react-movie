import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2010"},
        {id: 2, title: "Avengers", release_date: "2021"},
        {id: 3, title: "Iron Man", release_date: "2023"},
    ]


    return <div className="Home">
        <form onSubmit={} className="search-form">
                <input type="text" placeholder="Search for a movie..." />
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home