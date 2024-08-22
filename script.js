// Função para enviar os dados para o WhatsApp
function enviarParaWhatsApp() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const barbeiro = document.getElementById('barbeiro').value;

    const mensagem = `Olá, gostaria de marcar este horário!! %0A%0A*Novo Agendamento*%0A*Nome*: ${nome}%0A*Telefone*: ${telefone}%0A*Data*: ${data}%0A*Horário*: ${horario}%0A*Barbeiro*: ${barbeiro}`;
    const numeroWhatsApp = '5548988114792';  // Substitua pelo número da barbearia com código do país (55 para Brasil).

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;

    window.open(url, '_blank');
}

// Função para preencher o campo de horário com as opções disponíveis
async function carregarHorariosDisponiveis() {
    const data = document.getElementById('data').value;
    if (data) {
        const response = await fetch(`/horarios-disponiveis?data=${data}`);
        const horariosDisponiveis = await response.json();
        
        const selectHorario = document.getElementById('horario');
        selectHorario.innerHTML = ''; // Limpa os horários atuais

        horariosDisponiveis.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.text = horario;
            selectHorario.appendChild(option);
        });
    }
}

document.getElementById('data').addEventListener('change', carregarHorariosDisponiveis);
