document.getElementById('Login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
  
    const formData = new FormData(this); // Captura os dados do formulário
  
    fetch('https://localhost/3000', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucesso:', data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  });
  