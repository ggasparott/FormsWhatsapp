function enviarFormularioWhatsapp() {
    // Captura dos valores dos campos
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var confirmEmail = document.getElementById("confirm-email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var event = document.getElementById("event").value;
    var date = document.getElementById("date").value;
    var local = document.getElementById("local").value.trim();
    var city = document.getElementById("city").value.trim();
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;
    var guests = document.getElementById("EstimativaDeConvidados").value;
    var equipment = document.getElementById("tipoEquipamento").value;

    // 🔴 Validações

    // Validação do nome
    if (name === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    // Validação do email
    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Verificação se os emails coincidem
    if (email !== confirmEmail) {
        alert("Os emails digitados não coincidem.");
        return;
    }

    // Validação do telefone (mínimo 10 dígitos para incluir DDD)
    if (!validarTelefone(phone)) {
        alert("Por favor, insira um número de telefone válido com DDD.");
        return;
    }

    // Verificação de campos obrigatórios
    if (!event || !date || !local || !city || !startTime || !endTime || !guests || !equipment) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Mensagem formatada para envio no WhatsApp
    var message = `📢 *Novo Registro de Evento*\n\n` +
                  `👤 *Nome:* ${name}\n` +
                  `📧 *Email:* ${email}\n` +
                  `📞 *Telefone:* ${phone}\n` +
                  `🎉 *Evento:* ${event}\n` +
                  `📅 *Data:* ${date}\n` +
                  `📍 *Local:* ${local}, ${city}\n` +
                  `⏰ *Horário:* ${startTime} - ${endTime}\n` +
                  `👥 *Convidados:* ${guests}\n` +
                  `🎤 *Equipamento:* ${equipment}`;

    var whatsappUrl = `https://api.whatsapp.com/send?phone=5519992590679&text=${encodeURIComponent(message)}`;

    // 🔹 Abre o WhatsApp com os dados preenchidos
    window.open(whatsappUrl, '_blank');
}

// 🔹 Função para validar email
function validarEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 🔹 Função para validar telefone (mínimo 10 dígitos)
function validarTelefone(phone) {
    var phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone.replace(/\D/g, "")); // Remove caracteres não numéricos
}
