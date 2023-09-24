import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-7xl font-extrabold  my-32">Oppss !</h2>
            <Link className="mt-11 text-3xl bg-slate-500 rounded-lg p-4 text-white" to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;