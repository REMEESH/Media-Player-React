import React from 'react'
import { Col, Row, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span  className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur ea at pariatur praesentium, consequatur exercitationem amet, dolorem quos repudiandae accusamus vitae, doloribus aut recusandae dolorum aspernatur. Architecto, distinctio alias.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started</button>
      </Col>
      <Col></Col>
     <Col lg={5}>
      <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
      </Col>

    </Row>
    <div className="container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100" >
      <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/1928859/screenshots/5742686/ezgif.com-gif-maker.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3 ' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.tenor.com/WOQ4NaiPiRwAAAAC/beats-art.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
       </div>
       <div className="container border rounded p-5 border-secondary  mt-5 d-flex align-items-center justify-content-between w-100 mb-5">
        <div className="col-lg-5">
           <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
           <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit.  sunt neque quas aliquam sit sint consectetur harum!</h6>
           <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorise Videos</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. sunt neque quas aliquam sit sint consectetur harum!</h6>
           <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. doloribus sunt neque quas aliquam sit sint consectetur harum!</h6>

           </div>
           <div className="video col-lg-6 ">
          <iframe width="100%" height="387" src="https://www.youtube.com/embed/HYPUZFReyek" title="Harry Potter Bridge, Steam Train &amp; Characters | ഹാരി പോട്ടറിന്റെ നാട്ടിലൂടെ ഒരു യാത്ര" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
       </div>
    </>
  )
}

export default LandingPage