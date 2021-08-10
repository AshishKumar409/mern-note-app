import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Form, FormControl,Container} from 'react-bootstrap'
const Header = () => {
  return (
    
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
         <Navbar.Brand >
           <Link to="/">Note Zipper</Link>
         </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="m-auto">
       <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      
    </Form>
    </Nav>
    <Nav
      className="my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link ><Link to="/mynotes">My Notes</Link></Nav.Link>
      {/* <Nav.Link href="#action2">Ashish</Nav.Link> */}
      <NavDropdown title="Ashish" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
      </NavDropdown>
      {/* <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
    </Nav>
   
  </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
