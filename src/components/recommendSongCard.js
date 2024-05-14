import React from 'react';
import { Card, Col } from 'react-bootstrap';

function RecommendCard({ card }) {
    return (
        <Col key={card.title}>
            <Card style={{ padding: 20, marginTop: 20 }}>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card.Img variant='top rounded' src={card.imgSrc} />
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Title className='text-sm-centered fs-4 fst-italic fw-normal'>{card.title}</Card.Title>
                            <Card.Text>{card.artist}</Card.Text>
                            <Card.Link href='#'></Card.Link>
                            <button type="button" class="btn btn-outline-secondary">Read more</button>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
}

function Recommend({ cardDataRecommend }) {
    return (
        <>
            {cardDataRecommend.map((card) => (
                <RecommendCard key={card.title} card={card} />
            ))}
        </>
    );
}

export default Recommend;
