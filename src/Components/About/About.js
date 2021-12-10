import "./about.scss";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Breno from '../../Assets/brenor.jpeg'
import GuiP from "../../Assets/guip.jpg";
import GuiS from "../../Assets/guis.jpg";
import Rener from "../../Assets/rener.jpg";
import Rodrigo from "../../Assets/rodrigo.jpg";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>CTD E-Commerce | Sobre Nós</title>
      </Helmet>
      <div className="text-center text-black" style={{ marginTop: "30px" }}>
        <h3>Um pouco sobre nossos desenvolvedores.</h3>
      </div>
      <article className="container" style={{ marginBottom: "70px" }}>
        <div className="d-flex flex-sm-row flex-column align-content-center flex-wrap">
          <div className="cards">
            <Card className="cardStyle" style={{ width: "10rem" }}>
              <Card.Img className="imgStyle" variant="top" src={Breno} />
              <Card.Body className="cardName">
                <Card.Title className="cardTitleB">Breno Rodrigues</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="cardLink">
                <a
                  href="https://github.com/Brenex000006"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={"2rem"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/breno-rodrigues-souza-7464b2211/"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"} />
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card className="cardStyle" style={{ width: "10rem" }}>
              <Card.Img className="imgStyle" variant="top" src={GuiP} />
              <Card.Body className="cardName">
                <Card.Title>Guilherme Procópio</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="cardLink">
                <a
                  href="https://github.com/hiimgui"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub  size={"2rem"}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-procopio-963a3686/"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"}/>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card className="cardStyle" style={{ width: "10rem" }}>
              <Card.Img className="imgStyle" variant="top" src={GuiS} />
              <Card.Body className="cardName">
                <Card.Title className="cardTitleS">Guilherme Santos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="cardLink">
                <a
                  href="https://github.com/guilherme-sik"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={"2rem"}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-santos-38b562206/"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"}/>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card className="cardStyle" style={{ width: "10rem" }}>
              <Card.Img className="imgStyle" variant="top" src={Rener} />
              <Card.Body className="cardName">
                <Card.Title className="cardTitleRe">Rener Almeida</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="cardLink">
                <a
                  href="https://github.com/reneralmeida"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={"2rem"}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/rener-almeida-869b22212/"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"}/>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="cards">
            <Card className="cardStyle" style={{ width: "10rem" }}>
              <Card.Img className="imgStyle" variant="top" src={Rodrigo} />
              <Card.Body className="cardName">
                <Card.Title className="cardTitleRo">Rodrigo Brasil</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body className="cardLink">
                <a
                  href="https://github.com/rodrigo-brasil"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub size={"2rem"}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/rodrigo-brasil-272312178/"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"}/>
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutUs;
