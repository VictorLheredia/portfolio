import "../styles/Footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="Footer">
      <div className="footer-container">
        <div>
          <div className="icons">
            <a
              href="https://github.com/VictorLheredia/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-icon">
                <BsGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-luiz-heredia-153a7b227/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-icon">
                <BsLinkedin />
              </div>
            </a>
          </div>
          <div className="text">Portifólio de Victor Luiz Heredia</div>
        </div>
      </div>
      <div className="copyright">Copyright 2022</div>
    </div>
  );
}
