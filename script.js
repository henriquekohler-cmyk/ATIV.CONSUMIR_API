async function buscarCEP() {

    let cep = document.getElementById("cep").value;

    cep = cep.replace(/\D/g, "");

    if (cep.length != 8) {
        document.getElementById("resultado").innerHTML =
            "Digite um CEP com 8 números.";
        return;
    }

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await resposta.json();

        document.getElementById("json").textContent =
            JSON.stringify(dados, null, 2);

        if (dados.erro) {
            document.getElementById("resultado").innerHTML =
                "CEP não encontrado.";
            return;
        }

        document.getElementById("resultado").innerHTML = `
            <h3>Endereço:</h3>
            <p>Rua: ${dados.logradouro}</p>
            <p>Bairro: ${dados.bairro}</p>
            <p>Cidade: ${dados.localidade}</p>
            <p>Estado: ${dados.uf}</p>
        `;

    } catch (erro) {

        document.getElementById("resultado").innerHTML =
            "Erro ao consultar a API.";
    }
}
