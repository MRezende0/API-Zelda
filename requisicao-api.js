// URL da API
const apiUrl = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters';

// FunÃ§Ã£o para fazer a requisiÃ§Ã£o GET e retornar os dados desejados
function getMonsterData() {
  axios.get(apiUrl)
    .then(response => {
      const monsters = response.data.data;
      
      // Exibir informaÃ§Ãµes sobre os monstros
      monsters.forEach(monster => {
        console.log('Imagem:', monster.image);
        console.log('Nome:', monster.name);
        console.log('Descrição:', monster.description);
        console.log('Localização:', monster.common_locations);
        console.log('Propriedades:', monster.properties);
        console.log('---');
      });
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

// Chamando a funÃ§Ã£o para obter os dados de monstros
getMonsterData();