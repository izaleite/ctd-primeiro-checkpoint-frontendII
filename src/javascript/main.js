//  Criação da variavel para o formulario 
const formulario = document.querySelector('form');

// Criação da variavel para a div que receberá os dados informados no form. 
const cardRecebidos = document.querySelector('.pokedex');

// Criação do array vazio
const cardPokemon = [];

// Adicionando o event de submit para o formulario
formulario.addEventListener('submit', function (event) {

  // O método Object.fromEntries() transforma um array em um objeto.
  // objeto FormData será preenchido com as chaves/valores atuais do formulário usando a propriedade name/value, e Transforma em um novo objeto. 
  const informacoes = Object.fromEntries(new FormData(formulario).entries());

  // Invoca a função no momento do evento submit
  adicionarPokemon(informacoes)

  // previnindo que a página seja carregada
  event.preventDefault();
});

// Criação da função para adicionar os cartões ao cardRecebidos 
function adicionarPokemon(informacoes) {

  // adiciona os valores ao array vazio, que coletamos no obj do form.
  cardPokemon.push(informacoes)

  // Iniciamos para modificar o conteudo HTML
  cardRecebidos.innerHTML = "";

  cardPokemon.forEach((infPoke) => {

    const cards = document.createElement('div');
    cards.innerHTML =
      `
    <div class="container cartoes-pokemon">

        <!-- Cartão de Retorno do Pokemon -->
        <div class="container cartao-pokemon">

          <div class="container cartao-topo">

            <div class="detalhes">
              <h2 class="nome"> ${infPoke.nomePokemon}</h2>
              <span> #${infPoke.idPokemon}</span>
            </div>

            <span class="tipo">${infPoke.tipoPokemon}</span>

            <div class="container cartao-imagem">
              <img src="${infPoke.urlImg}" alt="Imagem do Pokemon">
            </div>
          </div>

          <div class="container cartao-informacoes">
            <div class="container status">
              <h3>Status</h3>
              <ul>
                <li>HP: ${infPoke.hpStatus}</li>
                <li>Ataque:${infPoke.ataqueStatus}</li>
                <li>Defesa:${infPoke.defesaStatus} </li>
                <li>Velocidade:${infPoke.velocidadeStatus} </li>
              </ul>
            </div>
            <div class="container habilidades">
              <h3>Habilidades</h3>
              <ul>
                <li>${infPoke.primeiraHabilidade}</li>
                <li>${infPoke.segundaHabilidade}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `
    // Setando a classe da div (card)
    cards.setAttribute('class', 'cards');

    // Setando que o card é filho do cardRecebidos
    cardRecebidos.appendChild(cards);
  })
}