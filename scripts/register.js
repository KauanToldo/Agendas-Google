function getDados() {

    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let siape = document.querySelector("#siape").value;
    let carga = document.querySelector("#carga").value;
    let area = document.querySelector("#area").value;


    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("siape", siape)
    localStorage.setItem("carga", carga)
    localStorage.setItem("area", area)

    window.location.href = "home.html";
}