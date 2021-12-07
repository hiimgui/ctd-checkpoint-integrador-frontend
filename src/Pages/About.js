import "./about.scss";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Breno from "../../src/Assets/brenor.jpeg";
import GuiP from "../../src/Assets/guip.jpg";
import GuiS from "../../src/Assets/guis.jpg";
import Rener from "../../src/Assets/rener.jpg";
import Rodrigo from "../../src/Assets/rodrigo.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="text-center text-black" style={{ marginTop: "30px" }}>
        <h3>Um pouco sobre nossos desenvolvedores.</h3>
      </div>
      <article className="Container" style={{ marginBottom: "130px" }}>
        <div className="title d-flex flex-column flex-sm-row justify-content-space-around align-items-center">
          <div className="Cards">
            <Card className="CardStyle" style={{ width: "16rem" }}>
              <Card.Img className="ImgStyle" variant="top" src={Breno} />
              <Card.Body>
                <Card.Title>Breno Rodrigues</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
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
          <div className="Cards">
            <Card className="CardStyle" style={{ width: "16rem" }}>
              <Card.Img className="ImgStyle" variant="top" src={GuiP} />
              <Card.Body>
                <Card.Title>Guilherme Procópio</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
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
          <div className="Cards">
            <Card className="CardStyle" style={{ width: "16rem" }}>
              <Card.Img className="ImgStyle" variant="top" src={GuiS} />
              <Card.Body>
                <Card.Title>Guilherme Santos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
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
          <div className="Cards">
            <Card className="CardStyle" style={{ width: "16rem" }}>
              <Card.Img className="ImgStyle" variant="top" src={Rener} />
              <Card.Body>
                <Card.Title>Rener Almeida</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
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
          <div className="Cards">
            <Card className="CardStyle" style={{ width: "16rem" }}>
              <Card.Img className="ImgStyle" variant="top" src={Rodrigo} />
              <Card.Body>
                <Card.Title>Rodrigo Brasil</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
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
