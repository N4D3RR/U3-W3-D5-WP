import { Container, Row, Col } from "react-bootstrap"

const MyFooter = () => {
  return (
    <footer
      className="mt-5 pt-4 pb-2  text-secondary small "
      style={{ backgroundColor: "#323232" }}
    >
      <Container>
        <Row className="mb-2">
          <Col xs={12} className="d-flex gap-2">
            <span>Italia</span>
            <span className="text-secondary">|</span>
            <span>English (UK)</span>
          </Col>
        </Row>

        <Row className="mb-2 lh-1">
          <Col xs={12}>
            Copyright © 2024 <span className="text-light">Apple Inc.</span>{" "}
            Tutti i diritti riservati.
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="d-flex flex-wrap gap-2 align-items-center">
            <span>Condizioni dei servizi internet</span>
            <span className="text-secondary">|</span>

            <span>Apple Music e privacy</span>
            <span className="text-secondary">|</span>

            <span>Avviso sui cookie</span>
            <span className="text-secondary">|</span>

            <span>Supporto</span>
            <span className="text-secondary">|</span>

            <span>Feedback</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
