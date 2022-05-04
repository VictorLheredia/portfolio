import "../styles/VcarsLogin.css";

import vcarsLogin from "../img/projects/vcars-login.png";
import vcarsLoginLogout from "../img/projects/vcars-login-logout.png";

export default function VcarsLogin() {
  return (
    <div id="VcarsLogin">
      <div className="project-title">Sistema de Login</div>
      <div className="project-img">
        <img src={vcarsLogin} alt="login" />
      </div>
      <div className="project-box">
        <div className="project-text">
          Proteção da rota do painel de controle, permite acesso somente para
          usuário <span>logado</span> e <span>autenticado</span>.
        </div>
        <div className="project-text">
          Utiliza <span>JWT “JSON Web Token”</span> no backend para autenticação
          via token.
        </div>
        <div className="project-text">
          Senha do usuário no banco de dados <span>MongoDB</span> é
          criptografada via <span>bcrypt</span>.
        </div>
        <div className="logout-box">
          <img src={vcarsLoginLogout} alt="login" />
          <div className="project-text">
            Botão de Logout com identificação do usuário logado.
          </div>
        </div>
      </div>
    </div>
  );
}
