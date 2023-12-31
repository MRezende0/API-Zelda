// URL da API
const apiUrl = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters';

let monsterData = [];

// FunÃ§Ã£o para fazer a requisiÃ§Ã£o GET e retornar os dados desejados
function getMonsterData() {
  axios.get(apiUrl)
    .then(response => {
      monsterData = response.data.data;
      
      // Exibir informaÃ§Ãµes sobre os monstros
      monsterData.forEach(monster => {
        console.log(monster);
      });

      renderDataInHTML();

    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

function renderDataInHTML(){
  const cards = document.querySelector('.cards');

  monsterData.forEach(data => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = data.image;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = data.name;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = data.description;

    card.appendChild(image);

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    card.appendChild(cardBody);

    // const listGroup = document.createElement("ul");
    // listGroup.className = "list-group list-group-flush";

    // const locationItem = document.createElement("li");
    // locationItem.className = "list-group-item";
    // locationItem.textContent = "Location";

    // const propertiesItem = document.createElement("li");
    // propertiesItem.className = "list-group-item";
    // propertiesItem.textContent = "Properties";

    // listGroup.appendChild(locationItem);
    // listGroup.appendChild(propertiesItem);

    // card.appendChild(listGroup);

    cards.appendChild(card);
  })
}

// Chamando a funÃ§Ã£o para obter os dados de monstros
getMonsterData();