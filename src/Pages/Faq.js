import React from 'react';
import useTitle from '../hooks/useTitle';

const Faq = () => {
    useTitle('FAQ');
    return (
        <div className='mt-5'>
            <h1>FAQ means Frequently Asked Question</h1>
        </div>
    );
};

export default Faq;