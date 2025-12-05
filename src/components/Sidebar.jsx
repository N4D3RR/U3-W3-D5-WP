import { Container, Form, Nav, Row } from "react-bootstrap"

const Sidebar = () => {
  return (
    <Container className="px-3 ">
      <Form.Control
        type="search"
        placeholder="Cerca"
        className="mb-3 bg-dark text-light border-secondary"
      />

      <Nav className="flex-column">
        <Nav.Link className="text-light">Home</Nav.Link>
        <Nav.Link className="text-light">Novità</Nav.Link>
        <Nav.Link className="text-light">Radio</Nav.Link>
      </Nav>
    </Container>
  )
}

export default Sidebar
