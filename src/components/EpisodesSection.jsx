import { Row, Col, Card } from "react-bootstrap"

// const EpisodesSection = () => {
//   return (
//     <section className="mb-4">
//       <h4 className="fw-semibold mb-2">Nuovi episodi radio</h4>
//       {/* devo trovare il modo di mappare le immagini in assets/images per automatizzare la creazione delle card  */}
//       <Row className="g-3">
//         <Col xs={6} md={3} lg={2}>
//           <Card className="bg-dark border-0 text-light">
//             <Card.Img src="src/assets/images/2a.png" alt="cover" />

//             <Card.Body className="px-1">
//               <Card.Title className="fs-6 text-truncate">
//                 Prólogo con Abuelo
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={6} md={3} lg={2}>
//           <Card className="bg-dark border-0 text-light">
//             <Card.Img src="src/assets/images/2b.png" alt="cover" />

//             <Card.Body className="px-1">
//               <Card.Title className="fs-6 text-truncate">
//                 The Wanderer
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={6} md={3} lg={2}>
//           <Card className="bg-dark border-0 text-light">
//             <Card.Img src="src/assets/images/2c.png" alt="cover" />

//             <Card.Body className="px-1">
//               <Card.Title className="fs-6 text-truncate">
//                 Michael Bublé & Carly Pearce
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={6} md={3} lg={2}>
//           <Card className="bg-dark border-0 text-light">
//             <Card.Img src="src/assets/images/2d.png" alt="cover" />

//             <Card.Body className="px-1">
//               <Card.Title className="fs-6 text-truncate">
//                 Stephan Moccio
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={6} md={3} lg={2}>
//           {" "}
//           <Card className="bg-dark border-0 text-light">
//             <Card.Img src="src/assets/images/2e.png" alt="cover" />

//             <Card.Body className="px-1">
//               <Card.Title className="fs-6 text-truncate">
//                 Chart Spotlight: Julia Michaels
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </section>
//   )
// }

// export default EpisodesSection

const episodeTitles = [
  "Prólogo con Abuelo",
  "The Wanderer",
  "Michael Bublé & Carly Pearce",
  "Stephan Moccio",
  "Chart Spotlight: Julia Michaels",
]

// IMPORT AUTOMATICO IMMAGINI
const images = import.meta.glob("/src/assets/images/*.png", { eager: true })
const imageList = Object.values(images).map((img) => img.default)

const EpisodesSection = () => {
  return (
    <section className="mb-4">
      <h4 className="fw-semibold mb-2">Nuovi episodi radio</h4>

      <Row className="g-3">
        {episodeTitles.map((title, index) => (
          <Col
            xs={4}
            md={2}
            key={index}
            className={index > 2 ? "d-none d-md-block" : ""}
          >
            <Card className="bg-dark border-0 text-light h-100">
              <Card.Img src={imageList[index]} alt={title} />

              <Card.Body className="px-1">
                <Card.Title className="fs-6 text-truncate">{title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default EpisodesSection
