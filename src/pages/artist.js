import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from './navBar';

function ArtistDetail() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavBar />
            <Container>
                <div>
                    <div class="d-flex justify-content-between" style={{ marginTop: 20 }}>
                        <h3 class='fw-semibold align-items-center justify-content-center'>Taylor Swift</h3>
                        <div>
                            <Button variant='secondary' onClick={handleShow}>
                                Contact <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                </svg>
                            </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                {/* edit */}
                                <Modal.Header closeButton>
                                    <Modal.Title>Contact Info</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p class='fw-normal'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg> Instagram</p>
                                    <p class='fw-normal'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg> Facebook</p>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>

                    <p class='align-items-center justify-content-center'>
                        <img class="float-start clearfix img-thumbnail p-3 border-0" src="https://people.com/thmb/logWYJ7TOemKo4lujE-M4kKNQvM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x164:751x166)/Taylor-Swift-life-101123-tout-b99b188465254ec0a8eb50fa653b51dc.jpg" alt="Taylor Profile" style={{ paddingLeft: '20px;', height: '300px' }} />
                        <p>The American singer-songwriter Taylor Swift has written or co-written every song in her discography, with the exception of several cover songs and two guest features, alongside some songs released by other artists. Swift signed with Sony/ATV Tree publishing house in 2004 to become a professional songwriter.<br />
                            <br />
                            Pursuing a country music career in Nashville, Swift wrote or co-wrote all 11 tracks on her eponymous debut album, which was released by Big Machine Records in 2006. Swift then released two extended plays, The Taylor Swift Holiday Collection (2007) and Beautiful Eyes (2008). On her second studio album, Fearless (2008), Swift solely wrote eight tracks and co-wrote the remaining five with Liz Rose who had also worked with her on her debut album. She wrote all 14 tracks of her third studio album, Speak Now (2010), by herself. The album explores mainstream pop and rock styles in addition to the country pop sound of its predecessor. On her next release, Red (2012), Swift experimented with other pop, rock, electronic, and hip hop styles. She wrote nine Red tracks by herself and co-wrote with others including Swedish producers Max Martin and Shellback. Martin and Shellback collaborated with her again on her next two studio albums, 1989 (2014) and Reputation (2017), on which Swift also worked with producer Jack Antonoff and recalibrated her musical identity from country to pop. Antonoff continued collaborating with Swift on her seventh studio album, Lover (2019), which marks her first release after leaving Big Machine for Republic Records; Lover includes three solely-written tracks.
                        </p>
                    </p>
                </div>

                <Accordion style={{ marginTop: 30 }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Songwriting</Accordion.Header>
                        <Accordion.Body>
                            Swift uses her first-hand experiences as inspiration for her songwriting. In her songs, Swift often talks about Swift often criticizes her ex-lovers, which is a view of her songwriting that The Village Voice quipped, “Hearing what the song conveyed was like having a snooty professor. And it jeopardizes our assessment of Swift's talent. Which doesn't seem like a confession. But New York magazine believed that media scrutiny of her decision to "Digging personal life into that song is sexist. Because there were no requests for male friends." Swift herself once said, Not all songs are based on true stories. and sometimes by observation besides her hints in the song. Swift keeps quiet about the specifics of the song. “Because these are real people, you try to understand the background of where you came from as a songwriter. without losing friends through selfishness"
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Awards and achievements </Accordion.Header>
                        <Accordion.Body>
                            Swift has received numerous awards and honors, including 12 Grammy Awards 40 American Music Awards and 23 Billboard Music Awards Awards 12 Country Music Awards, 8 Academy of Country Music Awards, 2 Brit Awards and 1 Creative Arts Emmy Award. Awards as a composer She was honored by the Nashville Songwriters Association and the Songwriters Hall of Fame and was included in Rolling Stone's list of the 100 Greatest Songwriters of All Time in 2015.<br />
                            As of early 2016, Swift had sold more than 40 million albums, 130 million downloaded singles, and was one of the top five digitally-selling musicians worldwide. Swift , Taylor Swift, Fearless, Speak Now, Red and 1989 have sold more than 4 million units in the United States. Swift is the third-highest-selling artist for digital singles. in the united states with total sales of 106.5 million units, according to the American Music Industry Association
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div style={{ marginTop: 30 }}>
                    <hr />
                    <figure style={{ marginTop: 10 }}>
                        <blockquote class="blockquote fst-italic fw">
                            "Once upon a time, the planets and the fates and all the stars aligned,"
                        </blockquote>
                        <figcaption class="blockquote-footer" style={{ marginBottom: 10 }}>
                            "Mastermind," Midnights
                        </figcaption>
                    </figure>
                    <hr />
                </div>

                <div>
                    <h2 style={{ marginTop: 50 }}>Top hits Song from Taylor Swift</h2>
                    <table class="table table-hover" style={{ marginTop: 30 }}>
                        <thead><tr><th>Rank</th><th>Songs Title</th><th>Albums</th><th>Time</th><th>Year</th></tr></thead><tbody>
                            <tr><td>1</td><td>The 1</td><td>Folklore</td><td>04.32</td><td>2020</td></tr>
                            <tr><td>2</td><td>1 Step Forward, 3 Steps Back</td><td>Sour</td><td>03.26</td><td>2021</td></tr>
                            <tr><td>3</td><td>The Albatross</td><td>The Tortured Poets Department</td><td>03.19</td><td>2019</td></tr>
                            <tr><td>4</td><td>The Alchemy</td><td>Red and Red (Taylor's Version)</td><td>02.58</td><td>2023</td></tr>
                            <tr><td>5</td><td>All Too Well</td><td>Midnights</td><td>04.40</td><td>2021</td></tr>
                            <tr><td>6</td><td>August</td><td>Folklore</td><td>03.47</td><td>2022</td></tr>
                            <tr><td>7</td><td>Back to December</td><td>Speak Now and Speak Now</td><td>03.16</td><td>2024</td></tr>
                            <tr><td>8</td><td>Begin Again</td><td>Kellie Pickler</td><td>04.39</td><td>2024</td></tr>
                        </tbody></table>
                </div>
            </Container>
        </>
    );
}

export default ArtistDetail;