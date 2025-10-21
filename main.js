const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: " Qual é o objetivo principal que define a pontuação em uma partida de bocha?",
        alternativas: [
            {
                texto: " Lançar as bochas para que fiquem o mais próximo possível do balim.",
                afirmacao: " A excelência no jogo de bocha é medida pela precisão e pela capacidade de posicionar suas bolas em pontos estratégicos mais próximos ao alvo do que o seu oponente. ",
            },
            {
                texto: " Lançar as bochas com força para retirar o maior número de bolas do adversário da cancha. ",
                afirmacao: " Embora a remoção de bolas adversárias seja uma tática importante , ela funciona como uma ferramenta para alcançar o objetivo principal, que é o de garantir a proximidade ao bolim. ",
            }
        ]
    },
    {
        enunciado: " como se chama a bolinha pequena que se joga na cancha de bocha?",
        alternativas: [
            {
                texto: " Bocha Mestra. ",
                afirmacao: " No contexto do jogo, não existe uma bocha mestra o termo bocha designa as bolas maiores que são utilizadas pelos jogadores para pontuar.",
            },
            {
                texto: " Balim.",
                afirmacao: ": Bolim é o ponto focal neutro da partida a posição dele na cancha dita a estratégia e o valor de todas as outras jogadas subsequentes.",
            }
        ]
    },
    {
        enunciado: " Ao final de uma rodada, como a pontuação é atribuída às equipes? ",
        alternativas: [
            {
                texto: " Ambas as equipes contam quantas bolas têm perto do bolim e a equipe com o maior número ganha 1 ponto.",
                afirmacao: " Este método de contagem não é utilizado, pois a bocha valoriza a superioridade posicional absoluta, não uma simples maioria de bolas próximas. ",
            },
            {
                texto: " Apenas a equipe com a bocha mais próxima do bolim pontua, somando um ponto para cada bocha que esteja mais perto do alvo do que a melhor bocha adversária.",
                afirmacao: "O sistema de pontuação da bocha é exclusivo, pois garante que apenas o time em vantagem na rodada seja recompensado, podendo marcar múltiplos pontos dependendo do quão superior foi sua jogada.",
            }
        ]
    },
    {
        Enunciado: "Durante uma rodada, qual é a regra que determina quem deve realizar o próximo lançamento?",
        alternativas: [
            {
                texto: "A equipe cuja bocha estiver mais longe do bolim deve jogar até que consiga posicionar uma bola mais perto que a do adversário. ",
                afirmacao: "A dinâmica do jogo é definida pela desvantagem posicional; a obrigação de jogar recai sobre a equipe que não detém o ponto, forçando-a a tentar reverter a situação.",
            },
    {
        texto: "  As equipes jogam de forma estritamente alternada, uma bocha por vez, até que todas as bolas tenham sido lançadas.",
        afirmacao: " Um sistema de turnos fixos não se aplica à bocha, pois a estratégia do jogo depende da capacidade de responder diretamente à posição das bolas adversárias a cada momento. ",
    }
]
    },
{
    Enunciado: " Qual termo descreve a jogada de precisão, onde o objetivo é rolar a bocha suavemente para posicioná-la perto do bolim? ",
        alternativas: [
            {
                texto: " pontear (rolar). ",
                afirmacao: " A ação de apontar é considerada a base técnica da bocha, exigindo cálculo, sensibilidade e controle para colocar a bola em uma posição vantajosa.",
            },
            {
                texto: " atirar (bater). ",
                afirmacao: " O ato de bater a bocha  corresponde a uma jogada ofensiva e de força, cujo intuito é desestruturar a jogada do adversário.",
            }
        ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

   if (atual.>= perguntas.length){
    mostraResultado();
    return;
   }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal+= afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Pelo o que entendemos você é um jogador...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
