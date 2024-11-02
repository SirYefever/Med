
import errorPageHTML from './errorPage.html?raw'
import {refillMainContainer} from '../index/index'

function errorPageConstructor() {
    refillMainContainer(errorPageHTML);
}

export { errorPageConstructor }