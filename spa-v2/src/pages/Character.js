import getData from '../utils/getData';

const Character = async () => {
    const hash = location.hash.slice(1).toLowerCase();
    const idMatch = hash.match(/^\/(\d+)$/);
    const id = idMatch ? idMatch[1] : null;

    if (!id) {
        return `<div class="Error404"><h1>Personaje no encontrado</h1></div>`;
    }

    const character = await getData(id);

    const view = `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>

        <article class="Character-card">
            <h3>Episodes: ${character.episode?.length || 0}</h3>
            <h3>Status: ${character.status || '-'}</h3>
            <h3>Species: ${character.species || '-'}</h3>
            <h3>Gender: ${character.gender || '-'}</h3>
            <h3>Origin: ${character.origin?.name || '-'}</h3>
            <h3>Location: ${character.location?.name || '-'}</h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;