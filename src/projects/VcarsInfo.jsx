import "../styles/VcarsInfo.css";
import Accordion from "react-bootstrap/Accordion";

import VcarsFiltro from "./VcarsFiltro";
import VcarsLogin from "./VcarsLogin";
import VcarsPainel from "./VcarsPainel"

export default function VcarsInfo() {
  return (
    <div id="VcarsInfo">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filtros de Veiculos</Accordion.Header>
          <Accordion.Body>
            <VcarsFiltro></VcarsFiltro>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sistema de Login</Accordion.Header>
          <Accordion.Body>
            <VcarsLogin></VcarsLogin>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Painel de Controle</Accordion.Header>
          <Accordion.Body>
            <VcarsPainel></VcarsPainel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
