const produtos = [
  { nome: "Panceta Defumada de Rolo", imagem: "Imagens/img1catalogo.jpeg", descricao:"Feita com barriga suína, a panceta passa por limpeza e pesagem antes da aplicação dos temperos. Após a cura de 7 a 12 dias, as peças são lavadas, secas e amarradas manualmente. Em seguida, passam pela defumação com lenhas frutíferas por 6 a 10 horas, buscando desidratar o couro. Depois são resfriadas, passam por choque térmico e, por fim, cortadas e embaladas manualmente." },
  { nome: "Pancetta Arrotolata", imagem: "Imagens/img2catalogo.jpeg", descricao:"Feita com panceta suína sem couro, a carne é limpa, pesada e temperada, passando por cura de 7 a 12 dias. Depois é lavada, seca, recheada com alecrim, enrolada e amarrada manualmente. Segue para a defumação com lenhas frutíferas por 6 a 10 horas, sendo então resfriada, submetida a choque térmico e finalmente fatiada e embalada." },
  { nome: "Copa Defumada", imagem: "Imagens/img3catalogo.jpeg", descricao:"A sobrepaleta suína passa por um processo cuidadoso de preparo: primeiro é feita a toilette (limpeza e retirada de excessos), seguida da aplicação de um mix de temperos e aditivos. A carne então entra no processo de cura por 21 dias em ambiente refrigerado controlado. Após a cura, é lavada, seca, colocada em rede elástica e deixada descansar por 12 horas antes da defumação. Na defumação, feita de forma escalonada e controlada, a carne atinge 72 °C internamente, processo que dura de 6 a 12 horas. Em seguida, passa por um resfriamento de 24 horas dentro da estufa e um choque térmico por mais 24 horas em câmara fria. Por fim, é embalada a vácuo e enviada para comercialização."},
  { nome: "Toscana com queijo", imagem: "Imagens/img4catalogo.jpeg", descricao:"A linguiça é produzida com carnes nobres (sobrepaleta, lombo e pancetta), que passam por limpeza (toilette) e moagem. Em seguida, a carne é pesada, recebe um mix de temperos e é misturada até ficar homogênea. Depois, passa por um período de cura de 24 horas. Antes do ensaque, são adicionados água e queijo coalho (20%), e a mistura é novamente homogeneizada. As linguiças são embutidas em tripa suína natural com o auxílio de uma embutideira elétrica, e cada unidade é pesada individualmente (450 g). Por fim, são embaladas a vácuo, armazenadas na câmara de produtos acabados e enviadas aos pontos de revenda." },
  { nome: "Lombo defumado", imagem: "Imagens/img5catalogo.jpeg", descricao: "O lombo suíno é preparado com toilette (limpeza da carne) e aplicação de um mix de temperos e aditivos, seguido de um processo de cura de 21 dias em ambiente refrigerado. Após a cura, as peças são lavadas, secas, colocadas em rede elástica e descansam por 12 horas antes da defumação. Antes de defumar, cada peça recebe uma borrifada de whisky Jack Daniel’s e uma crosta de açúcar mascavo. A defumação ocorre de forma escalonada e controlada, até que a carne atinja 72 °C internamente (6 a 12 horas). Em seguida, o produto passa por resfriamento de 24 horas na estufa, choque térmico de mais 24 horas em câmara fria, sendo então embalado a vácuo e enviado para comercialização."}
];

//array de produtos (nome,imagem e descrição), cria 5 objetos, cada um representando um produto.
// é possivél adicionar mais, só adicionando mais um objeto.


const container = document.getElementById("produtos-container");

//Isso pega a div principal do HTML onde os produtos serão inseridos.
//Ela precisa existir no HTML!

produtos.forEach(produto => {
  const produtoDiv = document.createElement("div");
  produtoDiv.classList.add("produto");

// Isso percorre cada item do array produtos.
//A cada iteração, ele vai cria os elementos HTML correspondentes.
//Cria uma <div> para o produto e adiciona a classe .produto (que estiliza no CSS).


  const imagemDiv = document.createElement("div");
  imagemDiv.innerHTML = `<img src="${produto.imagem}" alt="${produto.nome}">`;

//Cria uma <div> que contém a <img> do produto.

  const selosDiv = document.createElement("div");
  selosDiv.classList.add("bloco-selos");
  selosDiv.innerHTML = `  
    <img src="Imagens/selo1.png" alt="Selo 1">
    <img src="Imagens/selo2.png" alt="Selo 2">
    <img src="Imagens/selo3.png" alt="Selo 3">
    <img src="Imagens/selo4.png" alt="Selo 4">
    <img src="Imagens/selo5.png" alt="Selo 5">
  `;

 ScrollReveal().reveal(".bloco-selos", {
  origin: "top",
  duration: 2000,
  distance: "50px",
  easing: "ease-out",
  interval: 200 
});

ScrollReveal().reveal(".bloco-selos img", {
  origin: "top",
  duration: 2000,
  distance: "50px",
  easing: "ease-out",
  interval: 200 
});



//Cria a parte dos selos, adicionando 5 imagens fixas.
//Esses selos são os que aparecem na lateral de cada produto (funciona com seu CSS).
// Caso os produtos tiver selos diferentes, pode ser incluido no objeto e gerar dinamicamente.

  const descricaoDiv = document.createElement("div");
  descricaoDiv.classList.add("descricao");
  descricaoDiv.innerHTML = `
    <h1>${produto.nome}</h1>
    <p>${produto.descricao}</p>
    <button class="btn-comprar-igor">Comprar agora</button>
  `;

  //Cria a parte descritiva do produto, com título, texto e botão.
  descricaoDiv.querySelector('.btn-comprar-igor').addEventListener('click', () => {
    window.location.href = '../../Luiz/koch/index.html';
  });


  produtoDiv.appendChild(imagemDiv);
  produtoDiv.appendChild(selosDiv);
  produtoDiv.appendChild(descricaoDiv);

  container.appendChild(produtoDiv);
});

//Adiciona os 3 blocos dentro de cada produto: Imagem, Selos, Descrição.
// de forma hierarquica! orientando a visão do cliente.
//olhar a imagem primeiro, nome do produto e após a descrição.

ScrollReveal().reveal("h2", {
  origin:"left",
  duration: 1000,
  distance: "5%",
});

 ScrollReveal().reveal(".imagens", {
  origin: "left",
  duration: 2000,
  distance: "50px",
  easing: "ease-out",
  interval: 200 
});

 ScrollReveal().reveal(".comercialimg img", {
  origin: "top",
  duration: 2000,
  distance: "50px",
  easing: "ease-out",
  interval: 200 
});

ScrollReveal().reveal(".texto-sobre-imagem", {
  origin: "top",
  duration: 2000,
  distance: "50px",
  easing: "ease-out",
  interval: 200 
});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"; 
  }
});




