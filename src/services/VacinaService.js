import axios from 'axios';

const VACINAS_API_URL = 'http://localhost:8080/api/vacinas';

class VacinaService {
  getVacinas() {
    return axios.get(VACINAS_API_URL);
  }

  createVacina(vacina) {
    return axios.post(VACINAS_API_URL, vacina);
  }

  deleteVacina(id) {
    return axios.delete(`${VACINAS_API_URL}/${id}`);
  }
}

export default new VacinaService();
