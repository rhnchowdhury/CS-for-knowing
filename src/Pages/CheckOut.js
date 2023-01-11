import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const CheckOut = () => {
    const [check2, setCheck2] = useState([]);
    useTitle('Checkout');

    useEffect(() => {
        fetch('https://computer-science-for-knowing-and-doing-server-site.vercel.app/sub-list')
            .then(res => res.json())
            .then(data => setCheck2(data))
    }, []);

    return (
        <div className='mt-5'>
            <h3>checkout page</h3>

            {
                check2.map(list => <p className='mb-0 m-1' key={list.id}>
                    <Link to={`/list/${list.id}`}><Button variant="warning">{list.sub_name}</Button></Link>
                </p>)
            }

        </div >
    );
};

export default CheckOut;