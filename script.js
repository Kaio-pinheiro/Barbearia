async function enviarAgendamento() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const barbeiro = document.getElementById('barbeiro').value;

    const agendamentoData = { 
      acao: 'agendar', // Adicione "acao" para identificar o método
      nome, 
      telefone, 
      data, 
      horario, 
      barbeiro 
    };
  
    try {
        const response = await fetch('/agendamento', { // Endpoint do servlet
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(agendamentoData),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        alert('Agendamento realizado com sucesso!');

    } catch (error) {
        alert('Erro ao realizar agendamento: ' + error.message);
    }
}