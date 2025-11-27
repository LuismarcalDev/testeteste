// Função utilitária para criar elementos dinamicamente
function criarElemento(tag, classe, texto) {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
}

/* ===== HEADER ===== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });
}

/* ===== BANNER ===== */
const banner = criarElemento('section', 'main-banner');
const imgBanner = document.createElement('img');
imgBanner.src = 'https://images.tcdn.com.br/img/img_prod/1362014/pancetta_arrotolata_211_1_b6a1dc56671734fdea41b6dd50138ce3.jpg';

const textoBanner = criarElemento('div', 'texto-banner');
const titulo = criarElemento('h1', '', 'KOCH');
const subtitulo = criarElemento('p', '', 'Embutidos e Defumados');
textoBanner.append(titulo, subtitulo);
banner.append(imgBanner, textoBanner);
document.body.appendChild(banner);

/* ===== INFO SECTION ===== */
const sectionInfo = criarElemento('section', 'section-info');
const imgInfo = document.createElement('img');
imgInfo.src = 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima4.png';

const textoInfo = document.createElement('div');
const h2Info = criarElemento('h2', '', 'KOCH');
const pInfo = criarElemento('p', '', 'Trabalhamos de forma natural, sem adição de glutamato monossódico e de corantes. Até porque, o que nos motiva é a sua saúde e segurança alimentar, além de lhe proporcionar momentos inesquecíveis com nossos produtos.');
textoInfo.append(h2Info, pInfo);

sectionInfo.append(imgInfo, textoInfo);
document.body.appendChild(sectionInfo);

/* ===== PRODUTOS ===== */
const sectionProdutos = criarElemento('section', 'produtos');
const headerProdutos = criarElemento('div', 'produtos-header');
const h2Produtos = criarElemento('h2', '', 'Nossos Produtos Mais Vendidos');

const btnComprar = criarElemento('button', 'btncomprar', '');
const iconcom = document.createElement('img');
iconcom.src = 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/carrinhoooo%201.png';
iconcom.classList.add('icone-btn');

const textoBtn = document.createTextNode('Compre Agora');
btnComprar.append(textoBtn, iconcom);
btnComprar.addEventListener('click', () => {
    window.location.href = '../../Luiz/koch/index.html';
});


headerProdutos.append(h2Produtos, btnComprar);

const grid = criarElemento('div', 'produtos-grid');

const produtos = [
    { nome: 'Toscana com Queijo e Ervas', img: 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima6.png' },
    { nome: 'Pernil Defumado de Rolo', img: 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima2.png' },
    { nome: 'Lombo Defumado', img: 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima1.png' },
    { nome: 'Copa Defumada', img: 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima3.png' }
];

produtos.forEach(p => {
    const item = criarElemento('div', 'produto-item');
    const card = criarElemento('div', 'card');
    const imgWrapper = criarElemento('div', 'img-wrapper');
    const img = document.createElement('img');
    img.src = p.img;
    const selo = document.createElement('img');
    selo.src = "https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/seloestrela%204.png";
    selo.classList.add('selo');
    imgWrapper.append(img, selo);
    card.append(imgWrapper);
    const h3 = criarElemento('h3', 'nomeproduto', p.nome);
    item.append(card, h3);
    grid.appendChild(item);
});

sectionProdutos.append(headerProdutos, grid);
document.body.appendChild(sectionProdutos);

/* ===== PRODUÇÃO ===== */
const secProducao = criarElemento('section', 'producao');
const tituloSec = criarElemento('h2', '', 'Produção dos Produtos');

const container = criarElemento('div', 'producao-container');

const imgProd = document.createElement('img');
imgProd.src = 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/ima5.png';
imgProd.classList.add('img-producao');

const bloco = criarElemento('div', 'producao-bloco');

const tituloProd = criarElemento('h3', '', 'Como funciona o processo');
const pProd = criarElemento('p', '', 'A charcutaria artesanal consiste na transformação cuidadosa de carnes suínas e bovinas em produtos como copas, lombos, pastrami, pancettas, bacons e linguiças, por meio de processos tradicionais de toilette, cura, defumação, resfriamento e embalagem. Esse trabalho valoriza o tempo, os temperos e a técnica, garantindo sabor, conservação natural e identidade autoral em cada peça produzida.');

const btnSaibaMais = criarElemento('button', 'btn-saibamais');
const icon = document.createElement('img');
icon.src = 'https://raw.githubusercontent.com/Julia-berti/imagens/refs/heads/master/cardapio%201.png';
icon.classList.add('icone-sb');

const text = document.createTextNode('Veja Nosso Catalogo');

btnSaibaMais.append(text, icon);
btnSaibaMais.addEventListener('click', () => {
    window.location.href = '../../Igor/projeto.tela1 4/index.html';
});
bloco.append(tituloProd, pProd, btnSaibaMais);
container.append(imgProd, bloco);
secProducao.append(tituloSec, container);

document.body.appendChild(secProducao);


/* ===== LÓGICA DO POPUP: MOSTRAR SÓ 1x POR NAVEGADOR ===== */
const POPUP_KEY = "koch_popup_shown";

// cria o HTML do popup via JS (já que não está mais no index.html)
function criarPopUpDom() {
    if (document.getElementById("popUp")) return; // já existe

    const overlay = document.createElement("div");
    overlay.className = "promo";
    overlay.id = "popUp";

    const box = document.createElement("div");
    box.className = "popUp";

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = PopUp;

    const img = document.createElement("img");
    img.id = "imagePopUp";
    img.alt = "";

    box.appendChild(btn);
    box.appendChild(img);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}

function abrirPopUp() {
    criarPopUpDom();

    const popUpEl = document.getElementById("popUp");
    const blockEl = document.getElementById("block");

    if (popUpEl) {
        popUpEl.style.display = "flex";
    }
    if (blockEl) {
        blockEl.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "hidden";
    }

    // marca como visto (não mostra mais, mesmo se atualizar)
    try {
        localStorage.setItem(POPUP_KEY, "1");
    } catch (e) {}

    // carrega imagem quando realmente abre
    PopUpImg();
}

// Só abre se ainda não mostrei neste navegador
try {
    const jaMostrou = localStorage.getItem(POPUP_KEY);
    if (!jaMostrou) {
        // dispara imediatamente na primeira visita
        abrirPopUp();
    }
} catch (e) {
    // fallback: se localStorage não estiver disponível, ainda assim funciona
    abrirPopUp();
}

/* Função para fechar o Popup e destravar a tela */
function PopUp() {
    const popUpEl = document.getElementById("popUp");
    const blockEl = document.getElementById("block");

    if (popUpEl) popUpEl.style.display = "none";

    if (blockEl) {
        blockEl.style.overflow = "auto";
    } else {
        document.body.style.overflow = "auto";
    }
}

/* Busca a imagem da API */
async function PopUpImg() {
    const imgElement = document.getElementById("imagePopUp");
    if (!imgElement) return;

    try {
        const res = await fetch(`https://mck847sh.api.sanity.io/v2025-10-31/data/query/production?query=*%5B_type+%3D%3D+%22Promocao%22%5D%7B%0A++id%2C%0A++nome%2C%0A++preco%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++descricao%0A%7D&perspective=drafts`);
        const data = await res.json();
        const imagemPopUp = data.result;

        if (imagemPopUp && imagemPopUp.length > 0) {
            // pega só a primeira imagem de promoção
            const img = imagemPopUp[0];
            const url = img.imagem || "https://via.placeholder.com/400x250?text=Promo%C3%A7%C3%A3o";
            imgElement.src = url;
        } else {
            // sem resultado da API -> placeholder
            imgElement.src = "https://via.placeholder.com/400x250?text=Promo%C3%A7%C3%A3o";
        }
    } catch (error) {
        console.error("Erro ao carregar imagem do popup:", error);
        // erro na API -> placeholder pra não ficar vazio
        imgElement.src = "https://via.placeholder.com/400x250?text=Promo%C3%A7%C3%A3o";
    }
}

/* ===== CERTIFICADO ===== */
const secCertificado = criarElemento('section', 'certificado');
const textoCert = criarElemento('div', 'texto-cert');
const tituloCert = criarElemento('h3', '', 'Certificado de qualidade');
const img1 = document.createElement('img');
img1.src = 'Julia/Projeto-ElKochi/imgs/certificado.png';
textoCert.append(tituloCert, img1);

const textoQualidade = criarElemento('div', 'texto-qualidade');
const tituloQualidade = criarElemento('h3', 'titulo-qualidade', 'Como cuidamos da qualidade do produto?');
const descricaoQualidade = criarElemento('p', 'descricao-qualidade', 'Para que isso ocorra da melhor forma possível, nossa equipe começou a estudar as minuciosas técnicas da charcutaria. Aquelas que permitiram que nossos antepassados pudessem preservar a carne para um melhor aproveitamento. Essas técnicas foram passadas por gerações, e hoje fazem parte da nossa história. Seguimos elas gradualmente, desde a seleção dos melhores cortes e temperos, à defumação e embalagem, do mesmo modo em que não esquecemos de evoluir e inovar nossas técnicas.');
textoQualidade.append(tituloQualidade, descricaoQualidade);

const imagensCert = criarElemento('div', 'imagens-cert');

const img2 = document.createElement('img');
img2.src = 'Julia/Projeto-ElKochi/imgs/Rectangle 54.png';
const img3 = document.createElement('img');
img3.src = 'Julia/Projeto-ElKochi/imgs/Rectangle 55.png';

imagensCert.append(img2, img3);


secCertificado.append(textoCert, textoQualidade, imagensCert);
document.body.appendChild(secCertificado);


/* ===== REVENDEDORES ===== */
const secRev = criarElemento('section', 'revendedores');
const h2Rev = criarElemento('h2', '', 'Nossos revendedores');
const gridRev = criarElemento('div', 'grid-rev');
const divRev = criarElemento('div', 'rev');
divRev.id = 'rev';
const divlingu = criarElemento('div', 'lingu');
const imglingu = criarElemento('img');
const divrevgrid = criarElemento('div', 'revgrid');
imglingu.src = 'Julia/Projeto-ElKochi/imgs/lingu.png';
divlingu.append(imglingu);


const revendedores = [
    'Julia/Projeto-ElKochi/imgs/central do peixe.png',
    'Julia/Projeto-ElKochi/imgs/consalter supermercado.png',
    'Julia/Projeto-ElKochi/imgs/bueno.png',
    'Julia/Projeto-ElKochi/imgs/vila pomar.png',
    'Julia/Projeto-ElKochi/imgs/seu biphe.png',
    'Julia/Projeto-ElKochi/imgs/bom beef.png',
];


revendedores.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gridRev.appendChild(img);
});

divrevgrid.append(gridRev);
divRev.append(divrevgrid, divlingu);
secRev.append(h2Rev, divRev);
document.body.appendChild(secRev);


/* ===== LOCALIZAÇÃO ===== */
const secLocal = criarElemento('section', 'localizacao');
secLocal.id = 'localizacao';
const tituloLocal = criarElemento('h2', '', 'Localização');
secLocal.appendChild(tituloLocal);


const containerLocal = criarElemento('div', 'container-local');


// Coluna 1: Mapa + endereço
const colunaMapa = criarElemento('div', 'coluna-mapa');


const iframe = document.createElement('iframe');
iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.281373271994!2d-53.7366!3d-24.7059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3fbb8b91d2fdf%3A0x9f8ccf5e64e8f75a!2sBiopark!5e0!3m2!1spt-BR!2sbr!4v1697239400000!5m2!1spt-BR!2sbr';
iframe.width = '400';
iframe.height = '250';
iframe.style.border = '0';
iframe.allowFullscreen = '';
iframe.loading = 'lazy';


const endereco = criarElemento('p', '',
    'Rua das Carobas, 1553, Biopark, Toledo – PR, CEP 85920-260.\n\n' +
    'Empresa trabalha de segunda a sexta-feira das 08:30 às 12:00, das 13:00 às 17:00h, sem atendimento ao público, pois não temos loja física.'
);
colunaMapa.append(iframe, endereco);


// Coluna 2: Horário de funcionamento
const colunaHorario = criarElemento('div', 'coluna-horario');


const bannerHorario = criarElemento('div', 'banner-horario', 'Horário de funcionamento 🕒');
const cardHorario = criarElemento('div', 'card-horario');

const dias = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira'];
dias.forEach(dia => {
    const linha = criarElemento('div', 'linha-horario');
    const nomeDia = criarElemento('span', 'dia', dia);
    const horario = criarElemento('span', 'hora', '08:00 às 17:30');
    linha.append(nomeDia, horario);
    cardHorario.appendChild(linha);

});


colunaHorario.append(bannerHorario, cardHorario);
containerLocal.append(colunaMapa, colunaHorario);
secLocal.appendChild(containerLocal);
document.body.appendChild(secLocal);


/* ===== RODAPÉ ===== */
const footer = criarElemento('footer', 'rodape');

const social = criarElemento('div', 'social');

const redes = [
    {
        icon: 'Julia/Projeto-ElKochi/imgs/instagram.png',
        alt: 'Instagram',
        link: 'https://www.instagram.com/k.charcutaria/'
    },
    {
        icon: 'Julia/Projeto-ElKochi/imgs/facebook.png',
        alt: 'Facebook',
        link: 'https://www.facebook.com/kochCharcutariaArtesanal/?locale=pt_BR'
    },
    {
        icon: 'Julia/Projeto-ElKochi/imgs/whatsapp.png',
        alt: 'WhatsApp',
        link: 'https://api.whatsapp.com/send/?phone=5545999730157&text=ola+tudo+bem%3F&type=phone_number&app_absent=0'
    }
];

redes.forEach(r => {
    const a = document.createElement('a');
    a.href = r.link;
    a.target = "_blank"; // abrir em nova aba

    const img = document.createElement('img');
    img.src = r.icon;
    img.alt = r.alt;

    a.appendChild(img);
    social.appendChild(a);
});

const marca = criarElemento('div', 'marca', 'KOCH');
const subtituloMarca = criarElemento('p', 'subtitulo', 'Embutidos e Defumados');
const copyright = criarElemento('p', 'copy', '© 2025 Grupo Koch. Todos os direitos reservados.');

footer.append(social, marca, subtituloMarca, copyright);
document.body.appendChild(footer);

/* ===== SCROLL REVEAL ANIMATIONS ===== */
// Aguarda o DOM estar completamente carregado
setTimeout(() => {
    // Título da seção de produtos
    ScrollReveal().reveal(".produtos-header h2", {
        origin: "left",
        duration: 1200,
        distance: "50px",
        easing: "ease-out"
    });

    // Cards de produtos (Nossos Produtos Mais Vendidos)
    ScrollReveal().reveal(".card", {
        origin: "bottom",
        duration: 1200,
        distance: "60px",
        easing: "ease-out",
        interval: 150
    });

    // Título da seção de revendedores
    ScrollReveal().reveal(".revendedores h2", {
        origin: "left",
        duration: 1200,
        distance: "50px",
        easing: "ease-out"
    });

    // Imagens dos revendedores
    ScrollReveal().reveal(".grid-rev img", {
        origin: "bottom",
        duration: 1200,
        distance: "60px",
        easing: "ease-out",
        interval: 150
    });
}, 500);