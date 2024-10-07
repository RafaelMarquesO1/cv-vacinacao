import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ConsultarPacientes.css'

function ConsultarPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [show, setShow] = useState(false);

  // Estado para controlar os dados do novo paciente
  const [novoPaciente, setNovoPaciente] = useState({
    nome: '',
    cpf: '',
  });

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    };

    fetchPacientes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/pacientes/${id}`);
      setPacientes(pacientes.filter(paciente => paciente.id !== id));
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
    }
  };

  const handleChange = (e) => {
    setNovoPaciente({
      ...novoPaciente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/pacientes', novoPaciente);
      setPacientes([...pacientes, novoPaciente]);
      setNovoPaciente({ nome: '', cpf: '' });
      setShow(false);
    } catch (error) {
      console.error('Erro ao adicionar paciente:', error);
    }
  };

  return (
    <div className="container">
      <h2>Consultar Pacientes</h2>
      <Button variant="primary" onClick={() => setShow(true)}>
        Adicionar Paciente
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Paciente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="nome" value={novoPaciente.nome} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" name="cpf" value={novoPaciente.cpf} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="row">
        {pacientes.map(paciente => (
          <div key={paciente.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{paciente.nome}</h5>
                <p className="card.text">CPF: {paciente.cpf}</p>
                <button onClick={() => handleDelete(paciente.id)} className="btn btn-danger">Excluir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultarPacientes;