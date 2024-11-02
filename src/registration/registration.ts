export default await function registrationManager(postLink: string) {

    const nameElement = document.querySelector("#nameSelector");
    const sexElement = document.querySelector("#sexSelector");
    const telephoneElement = document.querySelector("#telephoneSelector");
    const birthDateElement = document.querySelector("#telephoneSelector");
    const emailElement = document.querySelector("#emailSelector");
    const passwordElement = document.querySelector("#passwordSelector");
    const registerButton = document.querySelector("#regButtonSelector") as HTMLButtonElement;


    registerButton.onclick = () => {
        console.log("test");
    }
}