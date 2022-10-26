import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import ListShow from './ListShow';
import ShowCourse from './ShowCourse';

const List = () => {
    const shows = useLoaderData();
    console.log(shows)
    return (
        <div>
            <h4>list subject: {shows.length}</h4>
            {
                shows.map(course => <ShowCourse key={course.id} course={course}></ShowCourse>)
            }

            {/* {
                shows.map(st => <ListShow key={st.id} st={st}></ListShow>)
            } */}
        </div>
    );
};

export default List;