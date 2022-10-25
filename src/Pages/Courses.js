import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCourse from './ShowCourse';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h3>this is course:{allCourses.length}</h3>
            {
                allCourses.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)
            }
        </div>
    );
};

export default Courses;