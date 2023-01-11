import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        fetch('https://computer-science-for-knowing-and-doing-server-site.vercel.app/sub-list')
            .then(res => res.json())
            .then(data => setList(data))
    }, []);

    return (
        <div className='mt-3'>
            <Link to='/checkout'><Button className=' p-2' style={{ backgroundColor: 'tomato' }}>Get premium access</Button></Link>
            <h4 className='mt-3 fs-2 text-info mb-3'>Course List:</h4>
            {
                lists.map(list => <p className='mb-2' key={list.id}>
                    <Link to={`/list/${list.id}`}><Button variant="outline-success">{list.sub_name}</Button></Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;