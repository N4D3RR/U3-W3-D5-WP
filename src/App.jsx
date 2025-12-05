import "bootstrap/dist/css/bootstrap.min.css"

import { Provider } from "react-redux"
import ExploreSection from "./components/ExploreSection"
import store from "./redux/store"
import Sidebar from "./components/Sidebar"
import TopBarMobile from "./components/TopbarMobile"

import HeroRadioSection from "./components/HeroRadioSection"
import EpisodesSection from "./components/EpisodesSection"
import NewReleasesSection from "./components/NewReleasesSection"
import { Col, Container, Row } from "react-bootstrap"
import TopbarDesktop from "./components/TopbarDesktop"

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-dark text-light min-vh-100 d-flex flex-column">
          <TopBarMobile />

          <Container fluid className="flex-grow-1">
            <Row className="h-100">
              <Col
                md={3}
                lg={2}
                className="d-none d-md-flex bg-black py-3 border-end border-secondary sticky-top vh-100"
              >
                <Sidebar />
              </Col>

              <Col xs={12} md={9} lg={10} className="pt-3 pb-4">
                <TopbarDesktop />
                <h2 className="fw-bold mb-3 px-3">Novità</h2>

                <Container className="px-2 px-md-3">
                  <HeroRadioSection />
                  <EpisodesSection />
                  <NewReleasesSection />
                  <ExploreSection />
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    </>
  )
}

export default App
