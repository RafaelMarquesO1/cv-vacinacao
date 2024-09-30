import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Trash from "../assets/img/trash.svg";
import api from '../services/api';

function Home() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [errors, setErrors] = useState({});

  const inputNome = useRef();
  const inputEmail = useRef();
  const inputSenha = useRef();
  const inputConfirmarSenha = useRef();

  async function getFuncionarios() {
    try {
      const funcionariosFromApi = await api.get('/api/v1/funcionarios');
      setFuncionarios(funcionariosFromApi.data);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    }
  }

  const validate = () => {
    const newErrors = {};
    if (!inputNome.current.value) newErrors.nome = 'O nome é obrigatório.';
    if (!inputEmail.current.value) newErrors.email = 'O email é obrigatório.';
    if (!inputSenha.current.value) newErrors.senha = 'A senha é obrigatória.';
    if (inputSenha.current.value !== inputConfirmarSenha.current.value) {
      newErrors.confirmarSenha = 'As senhas não conferem.';
    }
    return newErrors;
  };

  async function createFuncionarios() {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    try {
      await api.post('/api/v1/funcionarios', {
        nome: inputNome.current.value,
        email: inputEmail.current.value,
        senha: inputSenha.current.value
      });
      getFuncionarios();
      inputNome.current.value = '';
      inputEmail.current.value = '';
      inputSenha.current.value = '';
      inputConfirmarSenha.current.value = '';
      setErrors({});
    } catch (error) {
      console.error('Erro ao cadastrar funcionário:', error);
      alert('Erro ao cadastrar funcionário. Tente novamente.');
    }
  }

  async function deleteFuncionarios(id) {
    await api.delete(`/api/v1/funcionarios/${id}`);
    getFuncionarios();
  }

  useEffect(() => {
    getFuncionarios();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Funcionários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputNome} />
        {errors.nome && <span style={{ color: 'red' }}>{errors.nome}</span>}
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <input placeholder="Senha" name="senha" type="password" ref={inputSenha} />
        {errors.senha && <span style={{ color: 'red' }}>{errors.senha}</span>}
        <input placeholder="Confirmar Senha" name="confirmarSenha" type="password" ref={inputConfirmarSenha} />
        {errors.confirmarSenha && <span style={{ color: 'red' }}>{errors.confirmarSenha}</span>}
        <button type="button" onClick={createFuncionarios}>Cadastrar</button>
        
        <Link to="/cadastro-vacinas">
          <button type="button" id="bVac">Ir para Cadastro de Vacinas</button>
        </Link>
      </form>

      {funcionarios.map(funcionario => (
        <div key={funcionario.id} className="card">
          <div>
            <p>Nome: <span>{funcionario.nome}</span></p>
            <p>Email: <span>{funcionario.email}</span></p>
            <p>Senha: <span>{funcionario.senha}</span></p>
          </div>
          <button onClick={() => deleteFuncionarios(funcionario.id)}>
            <img src={Trash} alt="Deletar" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
