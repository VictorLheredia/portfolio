import "../../styles/VcarsPainel.css";
import vcarsPainel from "../../img/projects/vcars-painel.png";
import vcarsPainelTabela from "../../img/projects/vcars-painel-tabela.png";

export default function VcarsPainel() {
  return (
    <div id="VcarsPainel">
      <div className="project-img">
        <img src={vcarsPainel} alt="painel de controle" />
      </div>
      <div className="project-box">
        <div className="project-title">Painel de Controle</div>
        <div className="tabela-box">
          <div className="project-text">
            <u>Tabela de veículos:</u> consome <span>“GET”</span>
            <span>API </span>
            via <span>Axios</span> , e retorna em tabela os dados de cada
            veiculo cadastrado no banco de dados, Possui botão para excluir
            veículo, faz um <span>“DELETE”</span>, e remove as imagens da{" "}
            <span>S3</span>
          </div>
          <img src={vcarsPainelTabela} alt="tabela" />
        </div>
        <div className="project-text">
          <u>Cadastro de veículo:</u> faz um <span>POST</span> na{" "}
          <span>API</span> via <span> Axios</span>, cria um objeto no banco de
          dados referenciando um veículo.
        </div>
        <div className="project-text">
          <u>Cadastro de usuário:</u> faz um <span>POST</span> na{" "}
          <span>API</span> via <span> Axios</span>, cria um objeto no banco de
          dados referenciando um usuário , com os dados do mesmo , e senha
          <span> criptografada</span>.
        </div>
      </div>
    </div>
  );
}
