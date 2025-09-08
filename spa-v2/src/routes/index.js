import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';


const routes = {
    '/': Home,
    '/:id': Character,
};

const parseHash = () => location.hash.slice(1).toLowerCase() || '/';

const resolveRoute = (route) => {
    if (route === '/') return route;
    if (/^\/(\d+)$/.test(route)) return '/:id';
    return null;
};

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();

    const hash = parseHash();
    const route = resolveRoute(hash);
    const render = route ? routes[route] : Error404;

    content.innerHTML = await render();
};

export default router;
