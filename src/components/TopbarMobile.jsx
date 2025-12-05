import { Navbar, Container, Button, Offcanvas } from "react-bootstrap"
import Sidebar from "./Sidebar"
import { useState } from "react"

const TopBarMobile = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#323232" }}
        className=" d-md-none px-3 py-2 border-bottom border-secondary justify-content-between"
      >
        <Button
          className="text-danger fs-3 p-0 me-2 bg-transparent border-0 
          "
          onClick={() => setShow(true)}
        >
          <i className="bi bi-list"></i>
        </Button>

        <Navbar.Brand className="text-light fw-semibold">Music</Navbar.Brand>

        <Button
          size="sm"
          className="border-0 text-danger bg-transparent fw-semibold"
        >
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
