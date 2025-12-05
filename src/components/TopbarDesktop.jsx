import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

const TopbarDesktop = () => {
  const current = useSelector((state) => state.player.current)
  return (
    <Container
      fluid
      className="py-2 d-none d-md-block"
      style={{ backgroundColor: "#323232" }}
    >
      <Row>
        <Col md={4} lg={3} className="d-flex align-items-center gap-3">
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-shuffle"></i>
          </Button>
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-rewind-fill"></i>
          </Button>
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-play-fill"></i>
          </Button>
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-fast-forward-fill"></i>
          </Button>
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-repeat"></i>
          </Button>
        </Col>
        <Col
          md={4}
          lg={6}
          className="text-center py-2"
          style={{ backgroundColor: "#434242ff" }}
        >
          {!current ? (
            <span className="fs-4">
              <i className="bi bi-apple"></i>
            </span>
          ) : (
            <Row className="text-center">
              <Col xs={12} className="fw-semibold">
                {current.title}
              </Col>
              <Col xs={12} className="small">
                {current.artist.name}
              </Col>
            </Row>
          )}
        </Col>

        <Col md={4} lg={3} className="d-flex justify-content-between">
          <Button className="bg-transparent px-0 mx-0 border-0">
            <i className="bi bi-volume-up-fill me-1"></i>
          </Button>
          <Button
            variant="danger"
            className="d-flex align-items-center px-1 py-1"
          >
            <i className="bi bi-person-fill me-1"></i>Accedi
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TopbarDesktop
