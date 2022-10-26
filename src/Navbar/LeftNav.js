import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftNav = () => {
    const [lists, setList] = useState([]);
    const { googleLogin } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch('http://localhost:5000/sub-list')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    return (
        <div>
            <h4>List: {lists.length}</h4>
            {
                lists.map(list => <p key={list.id}>
                    <Link to={`/list/${list.id}`}>{list.sub_name}</Link>
                </p>)
            }
            <Button variant="outline-success" className='mb-2' onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

        </div>
    );
};

export default LeftNav;