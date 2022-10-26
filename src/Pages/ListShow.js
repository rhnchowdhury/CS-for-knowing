import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ListShow = ({ st }) => {
    const { sub_name, picture, details } = st;
    return (
        <div >

            <CardGroup>
                <Card>
                    <Card.Img variant="top" style={{ height: '100px', width: '200px' }} src={picture} />
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

export default ListShow;