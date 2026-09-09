// Seleciona os slides
const slides = document.querySelectorAll(".slide");

// Seleciona os indicadores
const indicadores = document.querySelectorAll(".indicador");

// Seleciona os botões
const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");

// Seleciona o carrossel
const carousel = document.querySelector(".carousel");

// Índice do slide atualmente visível
let slideAtual = 0;

// Guarda o identificador do intervalo automático
let intervaloAutomatico = null;


/*
    Exibe o slide correspondente ao índice recebido.
*/
function mostrarSlide(indice) {

    slides.forEach(function (slide) {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(function (indicador) {
        indicador.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");

    indicadores[indice].classList.add("ativo");

    slideAtual = indice;
}


/*
    Avança para o próximo slide.
*/
function proximoSlide() {

    let novoIndice = slideAtual + 1;

    if (novoIndice >= slides.length) {
        novoIndice = 0;
    }

    mostrarSlide(novoIndice);
}


/*
    Volta para o slide anterior.
*/
function slideAnterior() {

    let novoIndice = slideAtual - 1;

    if (novoIndice < 0) {
        novoIndice = slides.length - 1;
    }

    mostrarSlide(novoIndice);
}


/*
    Para o intervalo que estiver funcionando.
*/
function pararCarrosselAutomatico() {

    if (intervaloAutomatico !== null) {

        clearInterval(intervaloAutomatico);

        intervaloAutomatico = null;
    }
}


/*
    Inicia a troca automática.
*/
function iniciarCarrosselAutomatico() {

    // Garante que nunca existam dois intervalos simultâneos
    pararCarrosselAutomatico();

    intervaloAutomatico = setInterval(function () {

        proximoSlide();

    }, 5000);
}


/*
    Avança manualmente.
*/
botaoProximo.addEventListener("click", function () {

    proximoSlide();

    iniciarCarrosselAutomatico();
});


/*
    Volta manualmente.
*/
botaoAnterior.addEventListener("click", function () {

    slideAnterior();

    iniciarCarrosselAutomatico();
});


/*
    Permite escolher um slide pelo indicador.
*/
indicadores.forEach(function (indicador, indice) {

    indicador.addEventListener("click", function () {

        mostrarSlide(indice);

        iniciarCarrosselAutomatico();
    });
});


/*
    Pausa quando o ponteiro entra no carrossel.
*/
carousel.addEventListener("pointerenter", function () {

    pararCarrosselAutomatico();
});


/*
    Retoma quando o ponteiro sai do carrossel.
*/
carousel.addEventListener("pointerleave", function () {

    iniciarCarrosselAutomatico();
});


// Exibe o primeiro slide
mostrarSlide(slideAtual);

// Inicia o carrossel
iniciarCarrosselAutomatico();

// RESPONSIVIDADE MENU MOBILE
const menuMobile = document.querySelector('.menu-mobile');

const linksMenu = document.querySelectorAll('.menu-links a');


// Reproduz a animação sempre que o menu for aberto

menuMobile.addEventListener('toggle', function() {

    if (menuMobile.open) {

        menuMobile.classList.remove('animando');

        // Força o navegador a reiniciar a animação
        void menuMobile.offsetWidth;

        menuMobile.classList.add('animando');

    } else {

        menuMobile.classList.remove('animando');

    }

});


// Fecha o menu ao clicar em um item

linksMenu.forEach(function(link) {

    link.addEventListener('click', function() {

        menuMobile.removeAttribute('open');

    });

});

// ===========================
// MODAL DE MODELOS
// ===========================

const modalModelos = document.getElementById('modalModelos');
const fecharModal = document.getElementById('fecharModal');
const modelosLista = document.getElementById('modelosLista');
const modalTitulo = document.getElementById('modalTitulo');


// ===========================
// MODELOS DE CADA CATEGORIA
// ===========================

const modelos = {

    "Camisas": [
        "Básica",
        "Polo",
        "Social manga longa",
        "Social manga curta",
        "Oversized",
        "Camisa UV",
        "Dry fit",
        "Camisa de times",
        "Outro modelo"
    ],

    "Bermudas": [
        "Jeans",
        "Esporte fino",
        "Mauricinho",
        "Dry fit",
        "Outro modelo"
    ],

    "Calças": [
        "Jeans",
        "Jogador",
        "Esporte Fino",
        "Sem lycra",
        "Alfaiataria",
        "Outro modelo"
    ],

    "Inverno": [
        "Casaco",
        "Jaqueta",
        "Suéter",
        "Outro modelo"
    ],

    "Calçados": [
        "Sapato",
        "Tênis",
        "Crocs",
        "Sandália Coca-Cola",
        "Sandália Rider",
        "Outro modelo"
    ],

    "Acessórios": [
        "Boné",
        "Óculos",
        "Cinto",
        "Carteira",
        "Meia",
        "Cueca",
        "Outro modelo"
    ]

};


// ===========================
// NOME DAS CATEGORIAS NO SINGULAR
// ===========================

const categoriaSingular = {

    "Camisas": "camisa",
    "Bermudas": "bermuda",
    "Calças": "calça",
    "Inverno": "inverno",
    "Calçados": "calçado",
    "Acessórios": "acessório"

};


// ===========================
// BOTÕES DAS CATEGORIAS
// ===========================

const botoesCategorias = document.querySelectorAll('.abrir-modelos');


botoesCategorias.forEach(function(botao) {

    botao.addEventListener('click', function(event) {

        event.preventDefault();

        const categoria = botao.dataset.categoria;


        // ===========================
        // TÍTULO DO MODAL
        // ===========================

        modalTitulo.textContent =
            `Escolha o modelo de ${categoriaSingular[categoria]}`;


        // Limpa os modelos anteriores

        modelosLista.innerHTML = '';


        // ===========================
        // CRIA OS BOTÕES DOS MODELOS
        // ===========================

        modelos[categoria].forEach(function(modelo) {

            const link = document.createElement('a');

            link.classList.add('modelo-opcao');

            link.textContent = modelo;


            // ===========================
            // MENSAGEM DO WHATSAPP
            // ===========================

            let mensagem;


            // ===========================
            // ACESSÓRIOS
            // ===========================

            if (categoria === "Acessórios") {

                if (modelo === "Boné") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando um Boné. Gostaria de ver os modelos disponíveis.`;

                } else if (modelo === "Óculos") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando um par de Óculos. Gostaria de ver os modelos disponíveis.`;

                } else if (modelo === "Cinto") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando um Cinto. Gostaria de ver os modelos disponíveis.`;

                } else if (modelo === "Carteira") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando uma Carteira. Gostaria de ver os modelos disponíveis.`;

                } else if (modelo === "Meia") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando uma Meia. Gostaria de ver os modelos e tamanhos disponíveis.`;

                } else if (modelo === "Cueca") {

                    mensagem = 
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e estou procurando por Cuecas. Gostaria de ver os modelos e tamanhos disponíveis.`;

                } else if (modelo === "Outro modelo") {

                    mensagem =
                        `Olá! Vi a categoria de Acessórios no site da Claudius Moda e gostaria de ver outros modelos disponíveis.`;

                }

            }


            // ===========================
            // DEMAIS CATEGORIAS
            // ===========================

            else {

                let produto;


                // ===========================
                // CAMISAS
                // ===========================

                if (categoria === "Camisas") {

                    if (modelo === "Básica") {
                        produto = "uma Camisa Básica";

                    } else if (modelo === "Polo") {
                        produto = "uma Camisa Polo";

                    } else if (modelo === "Social manga longa") {
                        produto = "uma Camisa Social de Manga Longa";

                    } else if (modelo === "Social manga curta") {
                        produto = "uma Camisa Social de Manga Curta";

                    } else if (modelo === "Oversized") {
                        produto = "uma Camisa Oversized";

                    } else if (modelo === "Camisa UV") {
                        produto = "uma Camisa UV";

                    } else if (modelo === "Dry fit") {
                        produto = "uma Camisa Dry Fit";

                    } else if (modelo === "Camisa de times") {
                        produto = "uma Camisa de Time";

                    }

                }


                // ===========================
                // BERMUDAS
                // ===========================

                else if (categoria === "Bermudas") {

                    if (modelo === "Jeans") {
                        produto = "uma Bermuda Jeans";

                    } else if (modelo === "Esporte fino") {
                        produto = "uma Bermuda Esporte Fino";

                    } else if (modelo === "Mauricinho") {
                        produto = "uma Bermuda Mauricinho";

                    } else if (modelo === "Dry fit") {
                        produto = "uma Bermuda Dry Fit";

                    }

                }


                // ===========================
                // CALÇAS
                // ===========================

                else if (categoria === "Calças") {

                    if (modelo === "Jeans") {
                        produto = "uma Calça Jeans";

                    } else if (modelo === "Jogador") {
                        produto = "uma Calça Jogador";

                    } else if (modelo === "Esporte Fino") {
                        produto = "uma Calça Esporte Fino";

                    } else if (modelo === "Sem lycra") {
                        produto = "uma Calça sem Lycra";

                    } else if (modelo === "Alfaiataria") {
                        produto = "uma Calça de Alfaiataria";

                    }

                }


                // ===========================
                // INVERNO
                // ===========================

                else if (categoria === "Inverno") {

                    if (modelo === "Casaco") {
                        produto = "um Casaco";

                    } else if (modelo === "Jaqueta") {
                        produto = "uma Jaqueta";

                    } else if (modelo === "Suéter") {
                        produto = "um Suéter";

                    }

                }


                // ===========================
                // CALÇADOS
                // ===========================

                else if (categoria === "Calçados") {

                    if (modelo === "Sapato") {
                        produto = "um Sapato";

                    } else if (modelo === "Tênis") {
                        produto = "um Tênis";

                    } else if (modelo === "Crocs") {
                        produto = "um Crocs";

                    } else if (modelo === "Sandália Coca-Cola") {
                        produto = "uma Sandália Coca-Cola";

                    } else if (modelo === "Sandália Rider") {
                        produto = "uma Sandália Rider";

                    }

                }


                // ===========================
                // OUTRO MODELO
                // ===========================

                if (modelo === "Outro modelo") {

                    mensagem =
                        `Olá! Vi a categoria de ${categoria} no site da Claudius Moda e gostaria de conhecer outros modelos disponíveis.`;

                } else {

                    mensagem =
                        `Olá! Vi a categoria de ${categoria} no site da Claudius Moda e estou procurando ${produto}. Gostaria de saber os tamanhos e cores disponíveis.`;

                }

            }


            // ===========================
            // LINK DO WHATSAPP
            // ===========================

            link.href =
                `https://wa.me/5581996890010?text=${encodeURIComponent(mensagem)}`;

            link.target = '_blank';

            link.rel = 'noopener noreferrer';


            // Adiciona o modelo ao modal

            modelosLista.appendChild(link);

        });


        // ===========================
        // ABRE O MODAL
        // ===========================

        modalModelos.classList.add('ativo');

    });

});


// ===========================
// FECHAR MODAL PELO X
// ===========================

fecharModal.addEventListener('click', function() {

    modalModelos.classList.remove('ativo');

});


// ===========================
// FECHAR CLICANDO FORA
// ===========================

modalModelos.addEventListener('click', function(event) {

    if (event.target === modalModelos) {

        modalModelos.classList.remove('ativo');

    }

});