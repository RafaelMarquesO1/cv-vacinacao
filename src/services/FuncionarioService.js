import axios from 'axios';

const FUNCIONARIOS_API_URL = 'http://localhost:8080/api/funcionarios';

class FuncionarioService {
  getFuncionarios() {
    return axios.get(FUNCIONARIOS_API_URL);
  }

  createFuncionario(funcionario) {
    return axios.post(FUNCIONARIOS_API_URL, funcionario);
  }

  deleteFuncionario(id) {
    return axios.delete(`${FUNCIONARIOS_API_URL}/${id}`);
  }
}

export default new FuncionarioService();
