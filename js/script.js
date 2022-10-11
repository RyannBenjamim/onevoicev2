const containerSentimentos = document.querySelector(".container")
const inserirBtn = document.querySelector('.inserir')
const containerAudioPersonalizado =  document.querySelector('.containerAudioPersonalizado')
const btnClose = document.querySelector('.btnClose')
const personalizadoTexto = document.querySelector('#personalizadoTexto')
const btnLer = document.querySelector('.btnLer')

const sentimentos = [
    { img: './../img/drink.jpg', text: 'Estou com sede'},
    { img: './../img/food.jpg', text: 'Estou com fome'},
    { img: './../img/tired.jpg', text: 'Estou cansado'},
    { img: './../img/hurt.jpg', text: 'Estou machucado'},
    { img: './../img/happy.jpg', text: 'Estou feliz'},
    { img: './../img/angry.jpg', text: 'Estou com raiva'},
    { img: './../img/sad.jpg', text: 'Estou triste'},
    { img: './../img/scared.jpg', text: 'Estou assustado'},
    { img: './../img/outside.jpg', text: 'Quero ir lá fora'},
    { img: './../img/home.jpg', text: 'Quero ir para casa'},
    { img: './../img/school.jpg', text: 'Quero ir para a escola'},
    { img: './../img/grandma.jpg', text: 'Quero ver a vovó'},
]

const initWS = new SpeechSynthesisUtterance()

sentimentos.forEach((sentimento) => {
    const div = document.createElement('div')

    div.classList.add('sentimento-box')
    div.innerHTML = `
        <img src="${sentimento.img}" alt="${sentimento.text}">
        <p class="info">${sentimento.text}</p>
    `
    
    div.addEventListener('click', () => {
        initWS.text = sentimento.text
        speechSynthesis.speak(initWS)

        div.classList.add('active')
        setTimeout(() => {
            div.classList.remove('active')
        }, 2000)
    })

    containerSentimentos.appendChild(div)
})

inserirBtn.addEventListener('click', () => {
    containerAudioPersonalizado.classList.add("show")
})

btnClose.addEventListener('click', () => {
    containerAudioPersonalizado.classList.remove("show")
})

btnLer.addEventListener('click', () => {
    initWS.text = personalizadoTexto.value
    speechSynthesis.speak(initWS)
})

// ------------------- Adicionar novo card ------------------- //

