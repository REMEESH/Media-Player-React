import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center'>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website " style={{width:'400px'}}>
         <h4><i className="fa-solid fa-cloud-arrow-up "></i> Media Player</h4>
         <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors. </h6>
          <h6>Code licensed Luminar, docs CC BY 3.0.</h6>
          <p> Currently v1.0.0.</p>

        </div>
        <div className="links d-flex flex-column">
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
            <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>

        </div>
        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootsrtrap</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>Routing</Link>

        </div>
        <div className="contact ">
            <h4>Contact Us</h4>
            <div className="sub d-flex">
                <input type="text" className="form-control" placeholder='Enter your Email Id' />
                <button className='btn btn-primary ms-3'>Subscribe</button>
            </div>
            <div className="icons fs-4 d-flex justify-content-around mt-3">
            <Link to={'https://twitter.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
            <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
            <Link to={'https://www.linkedin.com/feed/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://github.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></Link>
            <Link to={'https://www.instagram.com/remeexh/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></Link>
            </div>
        </div>
      </div>
     <p> Copyright © 2023 Media Playes. Built with React.  </p>
    </div>
  )
}

export default Footer