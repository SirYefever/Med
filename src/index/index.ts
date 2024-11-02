import State from '../state'
import headerBuilder from '../header/header'
import "./../style.css"
import "./../header/header.css"
import "./../registration/registration.css"
import { LocalDataStorage } from '.././LocalDataStorage'
import { errorPageConstructor } from '../errorPage/errorPage'
import { login } from '../login/login'
import { loginConstructor } from '../login/login'
// import { register } from '../registration/registration'
import { Router } from '.././router'

let authStateProvider = new LocalDataStorage();

let router = new Router();

router.template('login', function () {
    loginConstructor();
});

router.template('error', function () {
    errorPageConstructor();
});
// router.template('register', function () {
//   register();
// });

router.route('/', 'login');
// router.route('/error', 'errorPage');

// router.route('/register', 'register');

function refillSubMainContainer(innerHTML: string) {
    console.log("refill fired");
    if (!(subMainContainer === null)) {
        subMainContainer!.innerHTML = innerHTML;
    }
}

let state: State = State.getInstance();
let mainContainer = document.getElementById("mainContainer");
mainContainer?.classList.add("mainContainer");

mainContainer?.prepend(headerBuilder(state));

let subMainContainer = document.getElementById("sub-main-container");
mainContainer?.appendChild(subMainContainer!);

window.addEventListener('load', router.retrieveRoute);
window.addEventListener('hashchange', router.retrieveRoute);

export { refillSubMainContainer as refillMainContainer }