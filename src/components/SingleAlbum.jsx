import { Card, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../redux/actions/index"
import { setTrack } from "../redux/actions/index"

const SingleAlbum = ({ track }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.list)

  const isFav = favorites.find((f) => f.id === track.id)

  return (
    <Card className="bg-dark border-0 text-light h-100">
      <Card.Img
        src={track.album.cover_medium}
        alt={track.title}
        role="button"
        onClick={() => dispatch(setTrack(track))}
      />

      <Card.Body className="p-0 pb-2">
        <Row>
          <Col xs={10} className="">
            <Card.Text className="fs-6 text-truncate mb-0">
              {track.title}
            </Card.Text>
            <Card.Text className="text-muted text-truncate small">
              {track.artist.name}
            </Card.Text>
          </Col>

          <Col xs={2} className="p-0 mt-1">
            <Button
              variant={isFav ? "danger" : "outline-light"}
              size="sm"
              className="p-1 d-flex align-items-center justify-content-center border-0"
              onClick={() =>
                isFav
                  ? dispatch(removeFavorite(track.id))
                  : dispatch(addFavorite(track))
              }
            >
              {isFav ? (
                <i className="bi bi-heart-fill"></i>
              ) : (
                <i className="bi bi-heart"></i>
              )}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default SingleAlbum
