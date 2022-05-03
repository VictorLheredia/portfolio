import "../../styles/VcarsCard.css";
import vcars from "../../img/projects/vcars.png";
import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

export default function VcarsCard() {
  return (
    <div id="VcarsCard">
      <img src={vcars} alt="vcars" />
      <div className="card-info">
        <div className="card-title">Vcars Seminovos</div>
        <div className="card-subtitle">
          Projeto fullstack de uma concessionária de veículos
        </div>
        <div className="info">
          Front end em <span>React</span> - deploy <span>Vercel</span>
        </div>
        <div className="info">
          Back end em <span>Node.Js</span> - deploy <span>heroku</span>
        </div>
        <div className="info">
          Banco de dados <span>MongoDB</span> - deploy <span>Atlas</span>
        </div>
        <div className="info">
          Armazenamento de Imagens <span>AWS S3</span>
        </div>
        <div className="links">
          <a
            href="https://github.com/VictorLheredia/vcars_frontend"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-icon">
              <BsGithub />
            </div>
            <div className="link-text">Código</div>
          </a>
          <a
            href="https://vcars-iota.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-icon">
              <FiLink />
            </div>
            <div className="link-text">Confira o site</div>
          </a>
        </div>
      </div>
    </div>
  );
}
