import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

const TopbarDesktop = () => {
  const current = useSelector((state) => state.player.current)
  return (
    <Container
      fluid
      className="bg-black border-bottom border-secondary py-2 d-none d-md-block"
    >
      <Row>
        <Col md={4} className="d-flex align-items-center gap-3">
          <Button>⏮</Button>
          <Button>▶</Button>
          <Button>⏭</Button>
        </Col>
        <Col md={4} className="text-center bg-dark">
          {!current ? (
            <span className="fs-4"></span>
          ) : (
            <Row className="text-center">
              <Col xs={12} className="fw-semibold">
                {current.title}
              </Col>
              <Col xs={12} className="small text-muted">
                {current.artist.name}
              </Col>
            </Row>
          )}
        </Col>

        <Col md={4} className="text-end">
          {/* eventuale volume o pulsanti in futuro */}
        </Col>
      </Row>
    </Container>
  )
}

export default TopbarDesktop
