import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const [check2, setCheck2] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sub-list')
            .then(res => res.json())
            .then(data => setCheck2(data))
    }, []);

    return (
        <div>
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