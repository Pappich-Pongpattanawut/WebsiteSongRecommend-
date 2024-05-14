import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import NavBar from './navBar';

function SongDetail() {
  return (
    <>
      <NavBar />
      <Container id='songDetail' style={{ padding: 20, marginTop: 10 }}>
        <br />
        <h3 style={{ textAlign: 'center' }}>Die for You</h3>
        <br />
        <Row>
          <Card style={{ marginTop: 20 }}>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Card.Img variant='top rounded' src='https://images.genius.com/5964711b238e9f03cfe27921c92f28aa.736x736x1.png' />
                </Col>
                <Col md={8} style={{ overflowY: 'auto', maxHeight: '400px' }}>
                  <Card.Title className='text-sm-centered fs-4 fst-italic fw-normal'>Lyric</Card.Title>
                  <div className="lyrics-box" style={{ whiteSpace: 'pre-wrap' }}>
                    <p>
                      [Verse 1]<br />
                      I'm findin' ways to articulate the feelin' I'm goin' through<br />
                      I just can't say I don't love you (Yeah)<br />
                      'Cause I love you, yeah<br />
                      It's hard for me to communicate the thoughts that I hold<br />
                      But tonight, I'm gon' let you know<br />
                      Let me tell the truth<br />
                      Baby, let me tell the truth, yeah<br />
                      <br />
                      [Pre-Chorus]<br />
                      You know what I'm thinkin', see it in your eyes<br />
                      You hate that you want me, hate it when you cry<br />
                      You're scared to be lonely, 'specially in the night<br />
                      I'm scared that I'll miss you, happens every time<br />
                      I don't want this feelin', I can't afford love<br />
                      I try to find a reason to pull us apart<br />
                      It ain't workin' 'cause you're perfect<br />
                      And I know that you're worth it<br />
                      I can't walk away, oh<br />
                      <br />
                      [Chorus]<br />
                      Even though we're goin' through it<br />
                      And it makes you feel alone<br />
                      Just know that I would die for you<br />
                      Baby, I would die for you, yeah<br />
                      The distance and the time between us<br />
                      It'll never change my mind 'cause<br />
                      Baby, I would die for you<br />
                      Baby, I would die for you, yeah (Say)<br />
                      <br />
                      [Verse 2]<br />
                      I'm findin' ways to manipulate the feelin' you're goin' through<br />
                      But, baby girl, I'm not blamin' you<br />
                      Just don't blame me, too, yeah<br />
                      'Cause I can't take this pain forever<br />
                      And you won't find no one that's better<br />
                      'Cause I'm right for you, babe<br />
                      I think I'm right for you, babe<br />
                      <br />
                      [Pre-Chorus]<br />
                      You know what I'm thinkin', see it in your eyes<br />
                      You hate that you want me, hate it when you cry<br />
                      It ain't workin' 'cause you're perfect<br />
                      And I know that you're worth it<br />
                      I can't walk away, oh<br />
                      <br />
                      [Chorus]<br />
                      Even though we're goin' through it<br />
                      And it makes you feel alone<br />
                      Just know that I would die for you<br />
                      Baby, I would die for you, yeah<br />
                      The distance and the time between us<br />
                      It'll never change my mind 'cause<br />
                      Baby, I would die for you, uh<br />
                      Baby, I would die for you, yeah<br />
                      <br />
                      [Bridge]<br />
                      I would die for you, I would lie for you<br />
                      Keep it real with you, I would kill for you, my baby<br />
                      I'm just sayin', yeah<br />
                      I would die for you, I would lie for you<br />
                      Keep it real with you, I would kill for you, my baby<br />
                      Na-na-na, na-na-na, na-na-na<br />
                      <br />
                      [Chorus]<br />
                      Even though we're goin' through it<br />
                      And it makes you feel alone<br />
                      Just know that I would die for you<br />
                      Baby, I would die for you, yeah<br />
                      The distance and the time between us<br />
                      It'll never change my mind 'cause<br />
                      Baby, I would die for you<br />
                      Baby, I would die for you, yeah (Oh, babe)<br /></p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <h1 style={{ marginTop: 40 }}>Another songs form The weekend</h1>
          <table class="table table-hover" style={{ marginTop: 20 }}>
            <thead><tr><th>Rank</th><th>Song title</th><th>Artist</th><th>Album</th><th>Time</th></tr></thead><tbody>
              <tr><td>1</td><td><td>One Of The Girls</td></td><td>The Weeknd, JENNIE, Lily-Rose Depp</td><td>cry and scream (Explicit)</td><td>04:04</td></tr>
              <tr><td>2</td><td>Save Your Tears (Remix)</td><td>The Weeknd, Ariana Grande</td><td>Save Your Tears (Remix)</td><td>03:11</td></tr>
              <tr><td>3</td><td>Reminder (Clean)</td><td>The Weeknd</td><td>Starboy</td><td>03:38</td></tr>
              <tr><td>4</td><td>You Right (Clean)</td><td>Doja Cat, The Weeknd</td><td>Planet Her</td><td>03:06</td></tr>
              <tr><td>5</td><td><td>I Feel It Coming</td></td><td>The Weeknd, Daft Punk</td><td>Starboy</td><td>04:29</td></tr>
              <tr><td>6</td><td><td>Save Your Tears (Explicit)</td></td><td>The Weeknd</td><td>After Hours</td><td>03:35</td></tr>
              <tr><td>7</td><td><td>Starboy (Explicit)</td></td><td>The Weeknd, Daft Punk</td><td>Starboy</td><td>03:50</td></tr>
            </tbody></table>
        </Row>
      </Container >
    </>
  );
}

export default SongDetail