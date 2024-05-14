import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PlaylistCard({ card }) {
    return (
        <Col md={3}>
            <Card style={{ padding: 10, marginTop: 20 }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <Card.Img variant='top rounded' src={card.imgSrc} style={{ height: '200px', width: '200px' }} className='rounded' />
                    <br />
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.artist}</Card.Text>
                        <Link to={`/details`}>
                        <button type="button" class="btn btn-outline-secondary">Read more</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );s
}

function Playlist({ cardDataPlaylist }) {
    return (
        <>
            {cardDataPlaylist.map((card, index) => (
                <PlaylistCard key={index} card={card} />
            ))}
        </>
    );
}

export default Playlist;

