import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [lists, setList] = useState([]);

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
        </div>
    );
};

export default LeftNav;