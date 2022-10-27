import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const [error, setError] = useState('');
    const { googleLogin, githubLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Google login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    };

    // Github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    };

    // Email-Password login
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        form.reset();

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                // navigate('/')
                navigate(from, { replace: true })
            })
            .catch(error => {
                // console.error(error)
                setError(error.message);
            })
    };

    return (

        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p>already have an account? Please, <Link className='text-decoration-none' to='/register'>Register</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-danger ms-2">
                    {error}
                </Form.Text>
            </Form>
            <Button variant="outline-success" className='mb-2 mt-3' onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Login with Google</Button> <br />
            <Button variant="outline-dark" onClick={handleGithubLogin}><FaGithub></FaGithub> Login with Github</Button>
        </div>
    );
};

export default Login;