import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ArtistCard({ card }) {
    return (
        <Col key={card.title} md={3}>
            <Card style={{ padding: 20, marginTop: 20 }} className='rounded-circle border-0'>
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <Card.Img variant='top' src={card.imgSrc} className='rounded-circle' style={{ height: '200px', width: '200px' }} />
                        <br />
                        <div className="text-center">
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.artist}</Card.Text>
                            <Link to={`/artist`}>
                                <button type="button" class="btn btn-outline-secondary">Read more</button>
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

function Artist({ cardDataArtist }) {
    return (
        <Row>
            {cardDataArtist.map((card, index) => (
                <ArtistCard key={index} card={card} />
            ))}
        </Row>
    );
}

export default Artist;
