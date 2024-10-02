import "../styles/Login.css";

function Login() {

  const inputEmailFuncionario = useRef();
  const inputSenhaFuncionario = useRef();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if(!inputEmailFuncionario.current.value) newErrors.EmailFuncionario = 'O E-mail é obrigatório';
    if(!inputSenhaFuncionario.current.value) newErrors.SenhaFuncionario = 'A Senha é obrigatória';
    
    return newErrors;
  }

  return (
    <div className="container">
      <form>
        <div className="title">
          <h1 id="title">Tela de Login</h1>
          <h2 id="subtitle">Seja bem-vindo!</h2>
        </div>

        <input type="text" placeholder="Email" />
        {errors.EmailFuncionario && <span style={{ color: 'red' }}>{errors.EmailFuncionario}</span>}
        <input type="password" placeholder="Senha" />
          <button type="button" onClick={() => navigate('/pagina-principal')}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;