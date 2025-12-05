import { Row, Col, Card } from "react-bootstrap"

const HeroRadioSection = () => {
  return (
    <Row className="mb-4">
      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <Card
          className="border-0 text-light overflow-hidden "
          style={{ backgroundColor: "#202020" }}
        >
          <Card.Body className="p-0 pt-3">
            <small className="text-uppercase text-secondary fw-semibold">
              Nuova stazione radio
            </small>
            <Card.Title className="fw-semibold fs-6 mt-1 ">
              Rilassati, al resto pensiamo noi. Apple Music Chill
            </Card.Title>
          </Card.Body>
          <Card.Img src="src/assets/images/radioStations/1a.png" />
        </Card>
      </Col>

      <Col xs={12} md={6}>
        <Card
          className="border-0  text-white overflow-hidden "
          style={{ backgroundColor: "#202020" }}
        >
          <Card.Body className="p-0 pt-3">
            <small className="text-uppercase  text-secondary fw-semibold">
              Nuova stazione radio
            </small>
            <Card.Title className="fw-semibold fs-6 mt-1">
              Ecco la nuova casa della musica latina
            </Card.Title>
          </Card.Body>
          <Card.Img src="src/assets/images/radioStations/1b.png" />
        </Card>
      </Col>
    </Row>
  )
}

export default HeroRadioSection
