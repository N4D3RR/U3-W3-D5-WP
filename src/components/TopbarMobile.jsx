import { Navbar, Container, Button, Offcanvas } from "react-bootstrap"
import Sidebar from "./Sidebar"
import { useState } from "react"

const TopBarMobile = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        className="d-md-none px-3 py-2 border-bottom border-secondary justify-content-between"
      >
        <Button
          className="text-light fs-3 p-0 me-2 bg-black border-0"
          onClick={() => setShow(true)}
        >
          ☰
        </Button>

        <Navbar.Brand className="text-light fw-semibold">Music</Navbar.Brand>

        <Button size="sm" variant="outline-light">
          Accedi
        </Button>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="bg-black text-light"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Music</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TopBarMobile
