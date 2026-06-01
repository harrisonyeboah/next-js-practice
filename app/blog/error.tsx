"use client"

export default function ErrorBoundary({error, reset} : {error: Error, reset: () => void;}) {
    return (
        <>
            <h1>
                The error is {error.message}
            </h1>

            <button onClick={() => reset()}>
                Reset
            </button>
        </>
    )
}