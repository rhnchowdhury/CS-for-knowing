import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCourse from './ShowCourse';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='mt-5 design'>
            {
                allCourses.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)
            }
        </div>
    );
};

export default Courses;