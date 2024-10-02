import { useEffect, useState, useRef } from "react";
import "../styles/CadastroFuncionarios.css";
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function CadastroVacinas() {
    const [vacinas, setVacinas] = useState([]);
    const [errors, setErrors] = useState({});

    const inputNomeVacina = useRef();
    const inputLote = useRef();
    const inputVacStatus = useRef();
    const navigate = useNavigate();

    async function getVacinas() {
        try {
            const vacinasFromApi = await api.get('/api/v1/vacinas');
            setVacinas(vacinasFromApi.data);
        } catch (error) {
            console.error('Erro ao buscar vacinas:', error);
        }
    }

    const validate = () => {
        const newErrors = {};
        if (!inputNomeVacina.current.value) newErrors.nomeVacina = 'O nome da vacina é obrigatório.';
        if (!inputLote.current.value) newErrors.lote = 'O lote é obrigatório.';
        if (!inputVacStatus.current.value || !['ATIVO', 'INATIVO'].includes(inputVacStatus.current.value)) {
            newErrors.vacStatus = 'O status deve ser ATIVO ou INATIVO.';
        }
        return newErrors;
    };

    async function createVacina() {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        try {
            await api.post('/api/v1/vacinas', {
                nomeVacina: inputNomeVacina.current.value,
                lote: inputLote.current.value,
                vacStatus: inputVacStatus.current.value // 'ATIVO' ou 'INATIVO'
            });
            getVacinas(); // Atualiza a lista de vacinas
            // Resetar campos e erros após o envio
            inputNomeVacina.current.value = '';
            inputLote.current.value = '';
            inputVacStatus.current.value = '';
            setErrors({});
        } catch (error) {
            console.error('Erro ao cadastrar vacina:', error);
            alert('Erro ao cadastrar vacina. Tente novamente.');
        }
    }

    async function deleteVacina(id) {
        if (window.confirm('Você tem certeza que deseja deletar esta vacina?')) {
            try {
                await api.delete(`/api/v1/vacinas/${id}`);
                getVacinas(); // Atualiza a lista de vacinas após a exclusão
            } catch (error) {
                console.error('Erro ao deletar vacina:', error);
                alert('Erro ao deletar vacina. Tente novamente.');
            }
        }
    }

    useEffect(() => {
        getVacinas();
    }, []);

    return (
        <div className="container">
            <form>
                <h1>Cadastro de Vacinas</h1>
                <input placeholder="Nome da Vacina" ref={inputNomeVacina} />
                {errors.nomeVacina && <span style={{ color: 'red' }}>{errors.nomeVacina}</span>}
                <input placeholder="Lote" ref={inputLote} />
                {errors.lote && <span style={{ color: 'red' }}>{errors.lote}</span>}
                <input placeholder="Status (ATIVO/INATIVO)" ref={inputVacStatus} />
                {errors.vacStatus && <span style={{ color: 'red' }}>{errors.vacStatus}</span>}
                <button type="button" onClick={createVacina}>Cadastrar</button>
                <button type="button" onClick={() => navigate('/cadastro-funcionarios')}>Voltar ao Cadastro de Funcionários</button>
            </form>

            {vacinas.map(vacina => (
                <div key={vacina.id} className="card">
                    <div>
                        <p>Nome: <span>{vacina.nomeVacina}</span></p>
                        <p>Lote: <span>{vacina.lote}</span></p>
                        <p>Status: <span>{vacina.vacStatus}</span></p>
                        <button style={{ color: 'red' }} onClick={() => deleteVacina(vacina.id)}>Deletar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CadastroVacinas;
