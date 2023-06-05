let nome = localStorage.getItem("nome")
let siape = localStorage.getItem("siape")
let carga = localStorage.getItem("carga")
document.querySelector("#info-user").innerHTML = `Bem vindo ${nome} - ${siape}`
let contador = 0

const listaTarefas = document.querySelector("#tarefas")
const addBtn = document.querySelector("#add-tarefa")
const cargaHoraria = document.querySelector("span")
cargaHoraria.innerHTML = ` 0h/${carga}h`



addBtn.addEventListener("click", () => {
    let nomeTarefa = document.querySelector("#nome-tarefa").value
    let diaTarefa = document.querySelector("#dia-tarefa").value
    let horaInicio = document.querySelector("#hora-inicio").value
    let horaFim = document.querySelector("#hora-fim").value
    if (nomeTarefa == "" | horaInicio == "" | horaFim == "") {
        alert("Insira todos as informações")
        return
    }
    if (horaInicio >= horaFim) {
        alert("Insira os dados corretamente")
        return
    }
    if (contador >= carga) {
        alert("Voce excedeu a sua carga horária")
        cargaHoraria.innerHTML = ` ${carga}h/${carga}h`
        return
    }
    verificarHorario()
    // Arrumar o float do contador
    mostrarTarefa(nomeTarefa, diaTarefa, horaInicio, horaFim)
    cargaHoraria.innerHTML = ` ${contador}h/${carga}h`
})

function verificarHorario() {
    var splInicial = document.getElementById("hora-inicio").value.split(":");
    var splFinal = document.getElementById("hora-fim").value.split(":");

    var inicialMin = (Number(splInicial[0] * 60)) + Number(splInicial[1]);
    var finalMin = (Number(splFinal[0] * 60)) + Number(splFinal[1]);

    var totalMin = Number(finalMin - inicialMin);
    contador += Number((totalMin / 60).toFixed(1));
}

function mostrarTarefa(nome, dia, horainicio, horafim) {
    const tarefa = document.createElement("div")
    listaTarefas.appendChild(tarefa)
    const nomeElement = document.createElement("h4")
    const diaElement = document.createElement("h4")
    const horarioElement = document.createElement("h4")
    nomeElement.innerHTML = `Nome: ${nome}`
    diaElement.innerHTML = `Dia da semana: ${dia}`
    horarioElement.innerHTML = `Horário: ${horainicio} - ${horafim}`
    tarefa.appendChild(nomeElement)
    tarefa.appendChild(diaElement)
    tarefa.appendChild(horarioElement)
}