import { FaFacebook, FaTwitterSquare, FaGooglePlus, FaYoutubeSquare } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { MDBFooter, MDBContainer, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {    
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <div className='icons-redes'>
        <section className='mb-4'>        
          <Link to='/'>
            <Button className='button' variant="btn btn-ms btn-outline-warning"><FaFacebook/></Button>
          </Link>
          <Link to='/'>
            <Button className='button' variant="btn btn-ms btn-outline-warning"><FaTwitterSquare/></Button>
          </Link>
          <Link to='/'>  
            <Button className='button' variant="btn btn-ms btn-outline-warning"><FaGooglePlus/></Button>
          </Link>
          <Link to='/'>  
            <Button className='button' variant="btn btn-ms btn-outline-warning"><FaYoutubeSquare/></Button>
          </Link>
          <Link to='/'>    
            <Button className='button' variant="btn btn-ms btn-outline-warning"><GrLinkedin /></Button>
          </Link>
          <Link to='/'>  
            <Button className='button' variant="btn btn-ms btn-outline-warning"><BsWhatsapp /></Button>
          </Link>               
        </section>
        </div>
        
        <section className=''>{/*Formulario de contacto - no funcional basado en https://mdbootstrap.com/docs/react/navigation/footer/*/}
          <form action=''>
          <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Contact us and sign up for our newsletter</strong>
                </p>
              </MDBCol>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol md='4' start='12'>
                <MDBInput contrast type='name' label='Names and Surnames' className='mb-4' placeholder="Names and Surnames" />
              </MDBCol>

              <MDBCol md='4' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' placeholder="Your@email"/>
              </MDBCol>

              <MDBCol md='4' start='12'>
                <MDBInput contrast type='phone' label='Phone' className='mb-4' placeholder="222446633"/>
              </MDBCol>
              <br></br>
              <MDBCol size="auto">
              <Button variant="btn btn-ms btn-outline-warning">
                  Subscribe
                </Button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <br></br>
        <section className='mb-4'>
          <p>
            URQUIZA 1847 (2000) ROSARIO SANTA FE 
          </p>
          <p>
            <strong>A R G E N T I N A</strong>
          </p>
          <p>
            WHATSSAP: +54 9 341 3392375
          </p>
        </section>        
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <span><p className='text-white'>© 2022 Copyright:    <a className='text-white' href='https://vetokfood.com/'>
          vetokfood.com
        </a> </p></span>
        
      </div>
    </MDBFooter>
  )
} 

export default Footer;