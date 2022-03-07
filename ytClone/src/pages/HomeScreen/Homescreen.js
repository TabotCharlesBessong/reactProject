
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Category from '../../components/CategoryBar/Category'
import Video from '../../components/Video/Video'

const Homescreen = () => {
  return (
    <Container className='mt-20' >
      <Category/>
      <Row>
        {
          [...new Array(20)].map(()=> <Col lg={3} md={4} >
            <Video/>
          </Col> )
        }
      </Row>
    </Container>
  )
}

export default Homescreen