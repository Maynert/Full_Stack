function renderDados(data){

    const list = document.getElementById("films-list"); // pega a <div id="films-list"> do HTML
    list.innerHTML = ""; // limpa o conteúdo anterior (se tiver)

    const filmes = data.results // data.results = array com todos os filmes da SWAPI
    .sort((a, b) => a.episode_id - b.episode_id); // ordena do episódio 1 ao 9

    filmes.forEach((film) => { // percorre cada filme filtrado
        const filmCard = document.createElement("div"); // cria uma <div> para cada filme
        filmCard.className = "film-card"; // aplica a classe CSS .film-card

        const filmTitle = document.createElement("h3"); // cria um <h3> para o título
        filmTitle.className = "film-title"; // aplica a classe CSS .film-title
        filmTitle.textContent = `Episódio ${film.episode_id}`; // texto do título com episódio + nome

        const filmInfo = document.createElement("p"); // cria um <p> para infos do filme
        filmInfo.textContent = `${film.release_date} • Dir: ${film.director}`; // mostra data + diretor

        const img = document.createElement("img");                         // cria a imagem do poster
        img.src = `images/episodio${film.episode_id}.png`;                 // caminho dinâmico por episódio
        img.alt = `Poster do Episódio ${film.episode_id}`;                 // texto alternativo  
        img.onerror = () => {
            img.src = "images/default.jpg";  // fallback se não achar a imagem
        };

        const overlay = document.createElement("div");                     // camada para texto por cima
        overlay.className = "overlay";                                     // classe usada no CSS

        filmTitle.className = "film-title";                                // título estilizado
        filmInfo.className = "film-info";                                  // info estilizada

        filmCard.onclick = function () { // função para quando clicar no card

            const modal = document.getElementById("modal"); // busca modal no html
            modal.style.visibility = "visible"; // troca o modal para visivel
            const modalcontent = document.getElementById("modal-content"); // busca modal-content no html
            modalcontent.innerHTML = ""; // limpa se tiver algo dentro
            const title = document.createTextNode(`Episódio ${film.episode_id}`); // cria um node texto para 
            console.log({title});
            modalcontent.appendChild(title);
            const filmTitleElement = document.createElement("h1"); // cria um <h1> para o título
            filmTitleElement.appendChild(title); // coloca o texto dentro do elemento do titulo
            modalcontent.appendChild(filmTitleElement); // coloca dentro do modalcontent o element do titulo
            
            const filmSubtitle = document.createTextNode(film.title);
            const filmSubtitleElement = document.createElement("h3");
            filmSubtitleElement.appendChild(filmSubtitle);
            modalcontent.appendChild(filmSubtitleElement);
            
            const filmDescription = document.createTextNode(film.opening_crawl);
            const filmDescriptionElement = document.createElement("p");
            filmDescriptionElement.appendChild(filmDescription);
            modalcontent.appendChild(filmDescriptionElement);
        };
        
        overlay.appendChild(filmTitle);                                    // coloca título dentro do overlay
        overlay.appendChild(filmInfo);                                     // coloca info dentro do overlay

        filmCard.appendChild(img);                                         // primeiro entra a imagem
        filmCard.appendChild(overlay);                                     // depois o overlay com textos
        filmCard.appendChild(img);
        filmCard.appendChild(filmTitle); // coloca o <h3> dentro do card
        filmCard.appendChild(filmInfo); // coloca o <p> dentro do card
        list.appendChild(filmCard); // adiciona o card dentro da div de lista
    });
}

window.onload = async function () { // roda quando a página terminar de carregar buscando dados na api
    fetch("https://swapi.dev/api/films/") // faz requisição HTTP na SWAPI (lista de filmes)
    .then(async (dados) => { // tenta executar o código (pra tratar erros)
        const data = await dados.json(); // converte a resposta pra JSON (objeto JS)
        renderDados(data);

    }) 
    .catch ((error) => { // se der erro em qualquer etapa acima...
        console.log(error); // mostra o erro no console
        alert("Erro ao carregar os filmes"); // alerta pro usuário
    });
};

function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
};

function onSearch() {
    const searchInput = document.getElementById("search-input").value;
    fetch(
    searchInput.length === 0 ? "https://swapi.dev/api/films/" : `https://swapi.dev/api/films/?search=${searchInput}`
    // iif - se o searchInput  for === 0, tras todos os filmes, se não, faz a busca
    )
    .then(async(dados) => {
        const data = await dados.json();
        renderDados(data);
    })
    .catch((error) => {
        alert("Falha ao realizar busca")
    });

};