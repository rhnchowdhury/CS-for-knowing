import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const CheckOut = () => {
    // const [check, setCheck] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:5000/sub-list')
    //         .then(res => res.json())
    //         .then(data => setCheck(data))
    // }, []);
    return (
        <div>
            <h3>checkout page</h3>
            {/* {
                check.map(ch => <p key={ch.id}>
                    <Link to={`/list/${ch.id}`}>{ch.sub_name}</Link>
                </p>)
            } */}
        </div>
    );
};

export default CheckOut;