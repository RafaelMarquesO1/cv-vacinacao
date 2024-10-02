import "../styles/Login.css";

function Login() {
  return (
    <div className="container">
      <form>
        <div className="title">
          <h1 id="title">Tela de Login</h1>
          <h2 id="subtitle">Seja bem-vindo!</h2>
        </div>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="button">Entrar</button>
      </form>
    </div>
  );
}

export default Login;