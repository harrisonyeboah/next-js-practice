export default async function Movie({params}: {params: Promise<{id: string}>}) {
    
    const movies = [
    { id: "1", title: "Inception", genre: "action", year: 2010 },
    { id: "2", title: "The Notebook", genre: "romance", year: 2004 },
    { id: "3", title: "Interstellar", genre: "action", year: 2014 },
    { id: "4", title: "Titanic", genre: "romance", year: 1997 },
    ]
    const resolvedParams = await params;
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {movies.filter(movie => movie.id === resolvedParams.id).map((movie) => (
                <div key={movie.id} className="border p-4 m-2 w-full max-w-md">
                    <h2 className="text-xl font-bold">{movie.title}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Year: {movie.year}</p>
                </div>
            ))}
        </div>
    );
}