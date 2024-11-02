import loginHTML from './login.html?raw'
import {refillMainContainer} from '../index/index'


async function login(requestBody: object): Promise<Response> {
    let result = null;
    const response = await fetch("https://mis-api.kreosoft.space/api/doctor/login", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (response.ok) {
        return response;
    }
    return response;
}

function loginConstructor() {
    refillMainContainer(loginHTML);
}

export { login, loginConstructor }