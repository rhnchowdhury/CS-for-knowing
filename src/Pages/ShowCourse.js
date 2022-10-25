import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const ShowCourse = ({ course }) => {
    console.log(course)
    const { sub_name, picture, details } = course;
    return (
        <div>
            {course.sub_name}

            {/* <Row >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col lg={3} className=""> */}
            <CardGroup lg='3'>
                <Card>
                    <Card.Img variant="top" height={'300'} src={picture} />
                    <Card.Body>
                        <Card.Title>{sub_name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>


            </CardGroup>
            {/* </Col>
                ))}
            </Row> */}
        </div>
    );
};

export default ShowCourse;