import { Card, Col, Row } from "react-bootstrap"
//mappare tutte le stringhe per fare una funzione unica creazione card - fatto
const items = [
  "Esplora per genere",
  "Decenni",
  "Attività e stati d'animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
]

const ExploreSection = () => {
  return (
    <section>
      <h4>Altro da esplorare</h4>
      <Row>
        {items.map((item, i) => (
          <Col xs={12} md={6} lg={4} key={i} className="p-2">
            <Card>
              <Card.Text className="py-2 px-3 text-danger fw-semibold">
                {item}
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
export default ExploreSection
