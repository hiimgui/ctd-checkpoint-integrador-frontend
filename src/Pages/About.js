import "./about.scss";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Breno from "../../src/Assets/brenor.jpeg";
import GuiP from "../../src/Assets/guip.jpg";
import GuiS from "../../src/Assets/guis.jpg";
import Rener from "../../src/Assets/rener.jpg";
import Rodrigo from "../../src/Assets/rodrigo.jpg";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
       <Helmet>
        <title>{`${AboutUs.title ? "CTD Eletrônicos" + AboutUs.title : "Sobre Nós"}`}</title>
    </Helmet>
      <div className="text-center text-black" style={{ marginTop: "30px" }}>
        <h3>Um pouco sobre nossos desenvolvedores.</h3>
      </div>
      <article className="container" style={{ marginBottom: "130px" }}>
        <div className="title d-flex flex-column flex-sm-row justify-content-space-around align-items-center">
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
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://"
                  className="icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
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
