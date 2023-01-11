const tarefa = document.querySelector('#tarefa')
const data = document.querySelector('#data')
const importancia = document.querySelector('#import')
const horario = document.querySelector('#time')
const btn = document.querySelector('.btn-new')
const lista_tarefas = document.querySelector('.tarefas')
const BtnApagar = document.querySelector('.delete')
const BtnAbrirMenuMob = document.querySelector('.btn_new_tarefa_mob')

var count = 0

PegarListasSalvas()

BtnAbrirMenuMob.addEventListener('click', function (e) { 
    e.preventDefault()
    const NewTarefa = document.querySelector('.container-new-tarefa')
    NewTarefa.classList.toggle('is-open')
})
BtnApagar.addEventListener('click', (e) =>{ 
    e.preventDefault()
    VerificarItem()
 })

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!tarefa.value , !data.value, !importancia.value, !horario.value) {
        return
    }
    subirValores()
})
btn.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        subirValores()  
     }
})

function VerificarVazio (cc, list){
    if (list == null) {
        cc=0
    } else {
        cc++
        Enviar(list)
    }
}
function criar_li() {
    const li = document.createElement('li')
    return li
}
function criar_p() {
    const p = document.createElement('p')
    return p
}
function criar_input_check(){
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name', 'delete')
    input.setAttribute('id', 'delete')
    return input
}
function CriaObj () {
    const Obj = { 
        tarefa: "",
        data: "",
        importancia:"",
        time:""
    }
    return Obj
 }

function VerificarItem(){
    const item = document.querySelectorAll('#delete')
    for (t of item) {
        if (t.checked) {
            var pai = t.parentElement
            ApagarTarefa(pai)
        }
    }
}
function ApagarTarefa (tarefa) { 
    const tarf = tarefa
    tarf.remove()
    salvarTarefa()

 }
 


function subirValores() {
    const li = criar_li()
    const p1 = criar_p()
    const p2 = criar_p()
    const p3 = criar_p()
    const p4 = criar_p()
    const BtnCheck = criar_input_check()
    li.classList.add('row')
    li.classList.add('tarf')
    
    BtnCheck.classList.add('col-md-1')
    p1.classList.add('col-sm-4')
    p2.classList.add('col-sm-3')
    p3.classList.add('col-sm-2')
    p4.classList.add('col-sm-2')
    p1.innerText = tarefa.value
    let data_brasileira = data.value.split('-').reverse().join('/');
    p2.innerText = data_brasileira
    p3.innerText = importancia.value
    p4.innerText = horario.value
    li.append(BtnCheck,p1, p2,  p4, p3)
    lista_tarefas.appendChild(li)
    salvarTarefa()
}

function mostraDadosJSON(list) {
    const li = criar_li()
    const p1 = criar_p()
    const p2 = criar_p()
    const p3 = criar_p()
    const p4 = criar_p()
    const BtnCheck = criar_input_check()
    li.classList.add('row')
    li.classList.add('tarf')
    p1.classList.add('col-sm-4')
    p2.classList.add('col-sm-3')
    p3.classList.add('col-sm-2')
    p4.classList.add('col-sm-2')
    BtnCheck.classList.add('col-md-1')
    p1.innerText = list.tarefa
    p2.innerText = list.data
    p3.innerText = list.importancia
    p4.innerText = list.time

    li.append(BtnCheck, p1, p2, p3, p4)
    lista_tarefas.appendChild(li)
}

function PegarListasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    var cc = 0
    VerificarVazio(cc, listaDeTarefas)
}

function Enviar(list) {
    const lista = list
    for (var tarefa of lista) {
        mostraDadosJSON(tarefa)
    }
}

function salvarTarefa() {
    const liTarefas = lista_tarefas.querySelectorAll('li')
    var count = 0
    const list_temp = []
    const list_for_JSON = []
    for (li of liTarefas) {
        const par = li.querySelectorAll('p')
        for (p of par) {
            list_temp.push(p.innerText)
        }
        const ob = new CriaObj()
        if (count === 0) {
            ob.tarefa = list_temp[count]
        } else {
            ob.tarefa = list_temp[count+=1]
        }
        ob.data = list_temp[count+=1]
        ob.importancia = list_temp[count+=1]
        ob.time = list_temp[count+=1]
        list_for_JSON.push(ob)
    }
    const TarefasJSON = JSON.stringify(list_for_JSON);
    localStorage.setItem('tarefas', TarefasJSON);
    
}