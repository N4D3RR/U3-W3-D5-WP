import { Container, Form, Image, InputGroup, Nav, Row } from "react-bootstrap"

const Sidebar = () => {
  return (
    <>
      <Container className=" ">
        <div className="mb-3 d-flex">
          <i className="bi bi-apple me-1"></i>
          <p>Music</p>
        </div>
        <InputGroup className="mb-3 border-0">
          <InputGroup.Text className="bg-dark border-secondary text-light border-0 ">
            <i className="bi bi-search pe-0 text-danger"></i>
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="bg-dark text-light border-secondary border-0 px-0"
          />
        </InputGroup>

        <Nav className="flex-column">
          <Nav.Link className="text-light px-0">
            <i className="bi bi-house-door text-danger me-2"></i>Home
          </Nav.Link>
          <Nav.Link className="text-light px-0">
            <i className="bi bi-grid text-danger me-2"></i>Novità
          </Nav.Link>
          <Nav.Link className="text-light px-0">
            <i className="bi bi-broadcast text-danger me-2"></i>Radio
          </Nav.Link>
        </Nav>
      </Container>
    </>
  )
}

export default Sidebar
