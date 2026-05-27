export default async function Reviews({ params }: { params: Promise<{ slug: string[] }> }) {
    // lib/data.ts
    const movies = [
        { id: "1", title: "Inception", genre: "action", year: 2010 },
        { id: "2", title: "The Notebook", genre: "romance", year: 2004 },
        { id: "3", title: "Interstellar", genre: "action", year: 2014 },
        { id: "4", title: "Titanic", genre: "romance", year: 1997 },
    ]
    const { slug } = await params;
    if (slug.length === 1) {
        const genre = slug[0];
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <h1 className="text-2xl font-bold mb-4">{genre}</h1>
                {movies.filter(movie => movie.genre === genre).map((movie) => (
                    <div key={movie.id} className="border p-4 m-2 w-full max-w-md">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p>Year: {movie.year}</p>
                    </div>
                ))}
            </div>
        ); 
    } else if (slug.length === 2) {
        const [genre, id] = slug;
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                {movies.filter(movie => movie.genre === genre && movie.id === id).map((movie) => (
                    <div key={movie.id} className="border p-4 m-2 w-full max-w-md">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p>Genre: {movie.genre}</p>
                        <p>Year: {movie.year}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                {movies.map((movie) => (
                    <div key={movie.id} className="border p-4 m-2 w-full max-w-md">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p>Genre: {movie.genre}</p>
                        <p>Year: {movie.year}</p>
                    </div>
                ))}
            </div>
        );
    }
}