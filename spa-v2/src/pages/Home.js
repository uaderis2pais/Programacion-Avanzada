import getData from '../utils/getData';

const Home = async () => {
  const data = await getData();
  if (!data) {
    return `<div class="Error"><h2>No se pudo cargar la información. Reintenta más tarde.</h2></div>`;
  }

  const characters = data?.results || [];
  if (!characters.length) {
    return `<div class="Empty"><h2>No hay personajes para mostrar.</h2></div>`;
  }

  const view = `
  <div class="Characters">
    ${
      characters.map(character => `
        <article class="Characters-card">
          <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')
    }
  </div>
  `;
  
  return view;
};

export default Home;
