/*para se declarar um vetor devemos usar a palavra var, seguida do nome do vetor exemplo: var nomes = [] os colchetes indicam que a variavel é um vetor*/
//var nomes = ['jogador1', 'jogador 2', 'jogador 3'];
//para acessar uma informação do vetor, deve-se utilizar o nome do vetor seguid
//de sua posição. exemplo abaixo
//nomes[1]
//console.log()=é um comando de saída que exibe algo no console do navegador
//console.log(nomes[0])

/*chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos.*/

console.log('Cards do Brasil')

//Guarda o elemento com a class cards dentro da variavel cards
let cards = document.querySelector('.cards')

/*Lê e carrega as informações de algum lugar neste caso de um arquivo json,quando o fetch 
carrega informações de um json as informações são convertidas em string(texto)*/
fetch('jogadores-brasil.json')
    /*recebeas informações vindas de uma outra função ou método que no caso seria o método fetch.
    o then deverá receber as informações em uma variável que no caso é variavel resposta e redireciona estas informações
    para algum lugar que no caso será para um arquivo json novament: reposta.json()*/
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((jogador) => {
        

        let card=document.createElement('div')
        //classList.add = adiciona uma classe a um elemento html
        card.classList.add('card')
        console.log(card)

        //colocar cada card dentro da div cards
        cards.appendChild(card)

        card.innerHTML = `
        <span class="posicaoP">${jogador.posicao}</span>
        <span class="posicaoG">${jogador.posicao}</span>
        <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
        <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
        <h3 class="nomeJogador">${jogador.nome}</h3>
        <h4 class="numero">${jogador.numero}</h4>`
    }))