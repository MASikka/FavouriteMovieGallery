import PageHeading from "./PageHeading";
import List from "./List";
import Gallery from "./Gallery";
import Footer from "./Footer";
import movies from "../movies";
function createMovie(movie) {
    return (
        <Gallery
            key={movie.id}
            movieName={movie.name}
            poster={movie.poster} />
    )
}
export default function App() {
    return (
        <div>
            <PageHeading />
            <List />
            {movies.map(createMovie)}
            <Footer />
        </div>
    );
}
