import React from 'react';
import { useLoaderData } from 'react-router-dom';

const List = () => {
    const show = useLoaderData();
    return (
        <div>
            <h4>list subject: {show.length}</h4>
        </div>
    );
};

export default List;