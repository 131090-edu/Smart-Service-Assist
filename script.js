function recomendarServico() {

    let opcao =
        document.getElementById("servico").value;

    let resultado =
        document.getElementById("resultado");

    if(opcao === "site"){

        resultado.innerHTML =
        "✅ Recomendamos o serviço de Criação de Sites.";

    }
    else if(opcao === "automacao"){

        resultado.innerHTML =
        "✅ Recomendamos Automação Empresarial.";

    }
    else if(opcao === "ia"){

        resultado.innerHTML =
        "✅ Recomendamos um Chatbot Inteligente.";

    }
    else{

        resultado.innerHTML =
        "⚠️ Selecione uma opção.";
    }
}

document
.getElementById("formContato")
.addEventListener("submit",function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    alert(
        "Obrigado, " +
        nome +
        "! Sua solicitação foi enviada."
    );

    this.reset();
});

function scrollToForm(){

    document
    .getElementById("contato")
    .scrollIntoView({
        behavior:"smooth"
    });
}

async function perguntarGemini(){

    const pergunta =
    document.getElementById("pergunta").value;

    const resposta =
    document.getElementById("resposta");

    resposta.innerHTML =
    "⏳ Consultando IA...";

    const API_KEY =
"SUA_CHAVE_GEMINI";

    try{

        const requisicao =
        await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                contents:[
                    {
                        parts:[
                            {
                                text:
                                "Você é um atendente da empresa Smart Service Assist. Responda de forma profissional. Pergunta: "
                                + pergunta
                            }
                        ]
                    }
                ]
            })
        });

        const dados =
        await requisicao.json();

        resposta.innerHTML =
        dados.candidates[0]
        .content.parts[0].text;

    }
    catch(erro){

        resposta.innerHTML =
        "Erro ao conectar ao Gemini.";

        console.error(erro);
    }

}