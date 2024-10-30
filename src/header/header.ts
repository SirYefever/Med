import State from './../state'

const maximumUserNameLengthForHeader = 24;

function redirectToPage(selectElement: HTMLSelectElement) {
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

export default function headerBuilder(state: State): HTMLDivElement {
    const div = document.createElement("div");
    const logo = document.createElement("img");
    const middleHeaderDiv = document.createElement("div");
    const rightHeaderDiv = document.createElement("div");

    logo.src = "../public/resources/Logo.png";

    div.classList.add("headerDiv");
    logo.classList.add("headerLogo");
    middleHeaderDiv.classList.add("middleHeaderDiv");
    rightHeaderDiv.classList.add("rightHeaderDiv");

    div.appendChild(logo);
    div.appendChild(middleHeaderDiv);
    div.appendChild(rightHeaderDiv);


    if (state.isLoggedIn()) {
        const dropdownDiv = document.createElement("div");
        const dropdownLabel = document.createElement("label");
        const dropdownSelect = document.createElement("select");
        const dropdownContentDiv = document.createElement("div");
        const profileAnchor = document.createElement("a");
        const logoutAnchor = document.createElement("a");
        const dullOption = document.createElement("option");
        const profileOption = document.createElement("option");
        const logoutOption = document.createElement("option");
        const patientsAnchor = document.createElement("a");
        const consultationsAnchor = document.createElement("a");
        const reportsAnchor = document.createElement("a");

        dropdownLabel.classList.add("dropdownLabel");
        dropdownSelect.classList.add("dropdownSelect");
        dullOption.textContent = "";
        dullOption.classList.add("dullOption");
        profileOption.classList.add("headerAnchor");
        patientsAnchor.classList.add("headerAnchor");
        consultationsAnchor.classList.add("headerAnchor");
        reportsAnchor.classList.add("headerAnchor");
        patientsAnchor.classList.add("patientsAnchor");
        consultationsAnchor.classList.add("consultationsAnchor");
        reportsAnchor.classList.add("reportsAnchor");

        if (state.userName.length > maximumUserNameLengthForHeader) {
            dullOption.textContent = state.userName.substring(0, 20) + " ...";
        } else {
            dullOption.textContent = state.userName;
        }

        dropdownSelect.textContent = "";
        dropdownSelect.onchange = (event: Event) => {
            redirectToPage(dropdownSelect);
        }
        dropdownLabel.appendChild(dropdownSelect);

        profileOption.textContent = "Профиль";
        profileOption.value = "http://localhost/profile";
        logoutOption.textContent = "Выход";
        logoutOption.value = "http://localhost/login";

        patientsAnchor.textContent = "Пациенты";
        consultationsAnchor.textContent = "Консультации";
        reportsAnchor.textContent  = "Отчеты и статистика";
        patientsAnchor.href = "https://localhost/patients";
        consultationsAnchor.href = "https://localhost/consultations";
        reportsAnchor.href = "https://localhost/reports";

        dropdownSelect.appendChild(dullOption);
        dropdownSelect.appendChild(profileOption);
        dropdownSelect.appendChild(logoutOption);
        rightHeaderDiv.appendChild(dropdownLabel);

        middleHeaderDiv.appendChild(patientsAnchor);
        middleHeaderDiv.appendChild(consultationsAnchor);
        middleHeaderDiv.appendChild(reportsAnchor);

        dropdownContentDiv.id = "profileDropdown";
        dropdownContentDiv.appendChild(profileAnchor);
        dropdownContentDiv.appendChild(logoutAnchor);

        div.appendChild(dropdownDiv);
    } else {
        const logInLink = document.createElement("a");
        rightHeaderDiv.appendChild(logInLink);
        logInLink.textContent = "Вход";
        logInLink.href = "http://localhost/login/"; // TODO: move into separated file.
        logInLink.classList.add("headerAnchor");
        div.appendChild(middleHeaderDiv);
        div.appendChild(rightHeaderDiv);
    }
    return div;
}