import Link from "next/link";

const Error = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <h2>Ooopps... Something went wrong</h2>
            <button><Link href={'/'}><a>Go back to wall</a></Link></button>
        </div>
    )
};

export default Error;