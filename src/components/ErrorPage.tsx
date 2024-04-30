import { Link } from 'react-router-dom';

function ErrorPage(){
    return(
    <div>
        <h1>Sorry, this page doesn't exist!!</h1>
        <Link to="/">
            You can go to the main page by clicking here!!
        </Link>
    </div>
    );
};

export default ErrorPage;
