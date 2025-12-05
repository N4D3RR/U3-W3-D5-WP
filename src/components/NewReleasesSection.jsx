import { useEffect, useState } from "react"
import { Row, Col, Spinner, Alert } from "react-bootstrap"
import SingleAlbum from "./SingleAlbum"

const NewReleasesSection = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((data) => {
        setTracks(data.data)
        setLoading(false)
      })
      .catch(() => {
        setErr(true)
        setLoading(false)
      })
  }, [])

  return (
    <section className="mb-4">
      <div className="d-flex align-items-center mb-2">
        <h4 className="fw-semibold mb-0">Nuove uscite</h4>
      </div>

      {loading && <Spinner animation="border" variant="secondary" />}

      {err && <Alert variant="danger">Errore nel caricamento</Alert>}

      {!loading && !err && (
        <Row className="g-3">
          {tracks.slice(0, 12).map((t) => (
            <Col xs={6} md={4} lg={3} key={t.id}>
              <SingleAlbum track={t} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  )
}

export default NewReleasesSection
