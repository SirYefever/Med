import State from '../state'
import headerBuilder from '../header/header'
import "./../style.css"
import "./../header/header.css"
import "./../registration/registration.css"

let state: State = State.getInstance();
let mainContainer = document.getElementById("mainContainer");
mainContainer?.classList.add("mainContainer");

mainContainer?.prepend(headerBuilder(state));

let routes = new Map<string, (() => void) | string>();
let templates = new Map<string, (() => void)>();


function home() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);

    mainContainer?.appendChild(div);
};

function about() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);

    mainContainer?.appendChild(div);
};

function route(path: string, template: (() => void) | string): (() => void) | string | null {
    if (typeof template === 'function') {
        routes.set(path, template)
        return routes.get(path)!;
    }
    else if (typeof template === 'string') {
        routes.set(path, templates.get(template)!);
        return routes.get(path)!;
    } else {
        return null;
    };
};

function template(name: string, templateFunction: () => void): () => void {
    templates.set(name, templateFunction)
    return templateFunction;
};

template('home', function () {
    home();
});

template('about', function () {
    about();
});

route('/', 'home');
route('/about', 'about');

function resolveRoute(route: string) {
    try {
        return routes.get(route);
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

function router(evt: Event) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    if (typeof route === 'function') {
        route();
    }
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);