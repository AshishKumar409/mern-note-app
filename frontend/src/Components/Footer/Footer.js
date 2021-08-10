import React from 'react'
import { Row ,Col,Container} from 'react-bootstrap'


const Footer = () => {
  return (
    <footer style={{display:"flex",width:"100%",justifyContent:"center"}}>
   <Container>
       <Row>
         <Col className="text-center py-3">Copyright &copy; Notezipper</Col>
       </Row>
   </Container>
    </footer>
  )
}

export default Footer
