import "../styles/Stacks.css";

import { Container, Row, Col } from "react-bootstrap";
import { FiMonitor } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FaDraftingCompass } from "react-icons/fa";

import javascript from "../img/stacks/javascript.svg";
import react from "../img/stacks/react.svg";
import html from "../img/stacks/html.svg";
import css from "../img/stacks/css.svg";
import node from "../img/stacks/node.svg";
import mongo from "../img/stacks/mongodb.svg";
import aws from "../img/stacks/aws.svg";
import s3 from "../img/stacks/s3.svg";
import git from "../img/stacks/git.svg";
import github from "../img/stacks/github.svg";
import bootstrap from "../img/stacks/bootstrap.svg";
import heroku from "../img/stacks/heroku.svg";
import axios from "../img/stacks/axios.svg";
import bcrypt from "../img/stacks/bcrypt.svg";
import jwt from "../img/stacks/jwt.svg";
import vercel from "../img/stacks/vercel.svg";
import figma from "../img/stacks/figma.svg";

export default function Stacks() {
  return (
    <div id="Stacks">
      <Container id="md">
        <div className="stacks-container">
          <div className="title">Conhecimentos nas Tecnologias</div>
          <div>
            <Row>
              <Col>
                <div className="stack-group">
                  <div className="stack-icon">
                    <div className="icon">
                      <FiMonitor />
                    </div>
                  </div>
                  <div className="stack-title">Frontend</div>
                  <div className="stack-list-container">
                    <div className="stack-list">
                      <div className="stack">
                        <img src={react} alt="react" />
                        <div className="text">React</div>
                      </div>
                      <div className="stack">
                        <img src={javascript} alt="javascript" />
                        <div className="text">Javascript</div>
                      </div>
                      <div className="stack">
                        <img src={html} alt="html" />
                        <div className="text">HTML</div>
                      </div>
                      <div className="stack">
                        <img src={css} alt="css" />
                        <div className="text">CSS</div>
                      </div>
                      <div className="stack">
                        <img src={bootstrap} alt="bootstrap" />
                        <div className="text">Bootsrap</div>
                      </div>
                      <div className="stack">
                        <img src={axios} alt="axios" />
                        <div className="text">Axios</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="stack-group">
                  <div className="stack-icon">
                    <div className="icon">
                      <FiDatabase />
                    </div>
                  </div>
                  <div className="stack-title">Backend</div>
                  <div className="stack-list-container">
                    <div className="stack-list">
                      <div className="stack">
                        <img src={node} alt="node" />
                        <div className="text">Node.js</div>
                      </div>
                      <div className="stack">
                        <img src={mongo} alt="mongo" />
                        <div className="text">MongoDB</div>
                      </div>
                      <div className="stack">
                        <img src={aws} alt="aws" />
                        <div className="text">AWS</div>
                      </div>
                      <div className="stack">
                        <img src={s3} alt="s3" />
                        <div className="text">Amazon S3</div>
                      </div>
                      <div className="stack">
                        <img src={bcrypt} alt="bcrypt" />
                        <div className="text">Bcrypt</div>
                      </div>
                      <div className="stack">
                        <img src={jwt} alt="jwt" />
                        <div className="text">JWT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="stack-group">
                  <div className="stack-icon">
                    <div className="icon">
                      <FaDraftingCompass />
                    </div>
                  </div>
                  <div className="stack-title">Others</div>
                  <div className="stack-list-container">
                    <div className="stack-list">
                      <div className="stack">
                        <img src={git} alt="git" />
                        <div className="text">Git</div>
                      </div>
                      <div className="stack">
                        <img src={github} alt="github" />
                        <div className="text">GitHub</div>
                      </div>
                      <div className="stack">
                        <img src={heroku} alt="heroku" />
                        <div className="text">Heroku</div>
                      </div>
                      <div className="stack">
                        <img src={vercel} alt="vercel" />
                        <div className="text">Vercel</div>
                      </div>
                      <div className="stack">
                        <img src={figma} alt="figma" />
                        <div className="text">Figma</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
