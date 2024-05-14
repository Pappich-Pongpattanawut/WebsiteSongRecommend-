import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import Recommend from '../components/recommendSongCard';
import Playlist from '../components/playlistCard';
import Artist from '../components/artistCard';
import { cardDataRecommend, cardDataPlaylist, cardDataArtist } from '../data';

function Home() {
    return (
        <div>
            {/* Top Artist */}
            <Container style={{ padding: 20, marginTop: 20 }}>
                <br />
                <Row>
                    <Col>
                        <Carousel style={{ borderRadius: '10px', width: '1250px' }}>
                            <Carousel.Item interval={3000}>
                                <div style={{ height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                                    <img
                                        src="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/11/10140543/taylor-swift-net-worth-1600x900.jpg"
                                        alt="taylor"
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3 class='fst-italic fw-bold'>taylor swift</h3>
                                    <p>one of the world's best-selling artists</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3000}>
                                <div style={{ height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                                    <img
                                        src="https://curiocity.com/wp-content/uploads/2021/08/BeFunky-collage-30-1.jpg"
                                        alt="The Weeknd"
                                        style={{ height: 'auto', width: '100%' }}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3 class='fst-italic fw-bold'>The Weeknd</h3>
                                    <p>singer, songwriter and producer</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={3000}>
                                <div style={{  height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                                    <img
                                        src="https://www.jambase.com/wp-content/uploads/2024/01/jeff-bernat-1480x832.png"
                                        alt="jeff bernat"
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3 class='fst-italic fw-bold'>Jeff bernat</h3>
                                    <p>highly acclaimed singer-songwriter with a remarkable journey</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    {/* Playlist */}
                    <Row id='playlists' style={{ marginTop: 50 }}>
                        <h2>Today's Top Hits</h2>
                        <Playlist cardDataPlaylist={cardDataPlaylist} />
                    </Row>

                    {/* Recommend albums */}
                    <Row id='albums' style={{ marginTop: 50 }}>
                        <h2>Recommend albums</h2>
                        <Recommend cardDataRecommend={cardDataRecommend} />
                    </Row>

                    {/* Circle Artist */}
                    <Row id='artists' style={{ marginTop: 50 }}>
                        <h2>Popular artists</h2>
                        <Artist cardDataArtist={cardDataArtist} />
                    </Row>
                </Row>
            </Container>

            <br />
            <footer style={{ textAlign: 'center', backgroundColor: 'rgb(240,240,240)', padding: 20 }}>
                Develope By
                <a href='https://github.com/Pappich?tab=repositories' target='#' style={{ marginLeft: 4 }}>Pappich Pongpattanawut</a>
            </footer>
        </div>
    );
}

export default Home;