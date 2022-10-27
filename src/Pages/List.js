import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCourse from './ShowCourse';

const List = () => {
    const shows = useLoaderData();
    // console.log(shows)
    return (
        <div className='mt-5'>
            {
                shows.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)
            }
        </div>
    );
};

export default List;