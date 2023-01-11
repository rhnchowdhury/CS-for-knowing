import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import useTitle from '../hooks/useTitle';

const ShowCourse = ({ course }) => {
    // console.log(course)
    const { sub_name, picture, details } = course;
    useTitle(`${sub_name}`);
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="" style={{ height: '150px', width: '300px' }} src={picture} />
                    <Card.Body>
                        <Card.Title>{sub_name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ShowCourse;