import React from 'react';
import useTitle from '../hooks/useTitle';

const ErrorRoute = () => {
    useTitle('Error');
    return (
        <div className='mt-5'>
            <h1 className='text-danger'>This route is: 404</h1>
        </div>
    );
};

export default ErrorRoute;