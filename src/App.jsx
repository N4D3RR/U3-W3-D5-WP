import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

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
import MyFooter from "./components/MyFooter"

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

              <Col
                xs={12}
                md={9}
                lg={10}
                className="pb-4 px-0"
                style={{ backgroundColor: "#202020" }}
              >
                <TopbarDesktop style={{ backgroundColor: "#2A2A2A" }} />
                <h2 className="fw-bold my-3 px-3">Novità</h2>
                <hr className="mx-3" />

                <Container className="px-2 px-md-3">
                  <HeroRadioSection />
                  <EpisodesSection />
                  <NewReleasesSection />
                  <ExploreSection />
                  <MyFooter />
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    </>
  )
}

//GRAZIE STEFANO! TRE MESI INTENSI!

export default App
