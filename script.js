// Função para enviar os dados para o WhatsApp
function enviarParaWhatsApp() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataISO = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const barbeiro = document.getElementById('barbeiro').value;

    // Converte a data para o formato dd/mm/aaaa
    const data = formatarDataBrasileira(dataISO);

    const mensagem = `Olá, gostaria de marcar este horário!! %0A%0A*Novo Agendamento*%0A*Nome*: ${nome}%0A*Telefone*: ${telefone}%0A*Data*: ${data}%0A*Horário*: ${horario}%0A*Barbeiro*: ${barbeiro}`;
    const numeroWhatsApp = '5548988114792';  // Substitua pelo número da barbearia com código do país (55 para Brasil).

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;

    window.open(url, '_blank');
}
// Função para formatar a data para o formato brasileiro dd/mm/aaaa
function formatarDataBrasileira(dataISO) {
    const partes = dataISO.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Função para preencher o campo de horário com as opções de 9:00 às 18:00
function gerarListaDeHorarios() {
    const horarios = [];
    for (let hora = 9; hora <= 18; hora++) {
        const horarioFormatado = hora.toString().padStart(2, '0') + ":00";
        horarios.push(horarioFormatado);
    }
    return horarios;
}

// Função para preencher o select com os horários disponíveis
function carregarHorarios() {
    const selectHorario = document.getElementById('horario');
    const horarios = gerarListaDeHorarios();
    
    selectHorario.innerHTML = ''; // Limpa as opções existentes
    
    horarios.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.text = horario;
        selectHorario.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', carregarHorarios);
