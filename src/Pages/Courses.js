import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCourse from './ShowCourse';
import './Courses.css'
import useTitle from '../hooks/useTitle';

const Courses = () => {
    const allCourses = useLoaderData();
    useTitle('Courses');
    return (
        <div className='mt-5 design'>
            {
                allCourses.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)
            }
        </div>
    );
};

export default Courses;