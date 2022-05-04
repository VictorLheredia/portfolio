import "../styles/VcarsFiltro.css";
import vcarsSearch from "../img/projects/vcars-search.png";
import vcarsSarchBrand from "../img/projects/vcars-search-brands.png";

export default function VcarsFiltro() {
  return (
    <div id="VcarsFiltro">
      <div className="project-img">
        <img src={vcarsSearch} alt="search" />
      </div>
      <div className="project-box">
        <div className="project-title">Sistema de filtro de veículos</div>
        <div className="project-text">
          Manipula o <span>State</span> do <span>React</span> para renderizar
          para o usuário apenas os veículos com os parâmetros filtrados
        </div>
        <div className="project-text">
          Utiliza o hook do React router v6 <span>useSearchParams</span> para
          setar os parametros de busca.
        </div>
        <div className="project-text">
          Utiliza o hook do React router v6 <span>searchParams.get</span> para
          filtrar os parametros setados.
        </div>
        <div className="project-text">
          Utiliza a biblioteca <span>React Input Range</span> para criar um
          range com 2 parâmetros , e filtrar os veículos com parâmetros dentro
          do intervalo setado.
        </div>
        <div className="search-brand-img">
          <img src={vcarsSarchBrand} alt="filtro por marca" />
        </div>
        <div className="project-text">
          A página também possui uma barra de filtro por Marca com os
          <span> Logotipos </span>
          das montadoras , melhorando a <span>UX</span> em relação a filtros.
        </div>
      </div>
    </div>
  );
}
