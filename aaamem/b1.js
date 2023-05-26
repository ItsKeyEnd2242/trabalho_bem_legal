const nome  = document.getElementById('')
const senha = document.getElementById('')
const email = document.getElementById('')
const dataNascimento = document.getElementById('')

const botao = document.querySelector('.submit')

botao.addEventListener('click', function(){

    window.localStorage.setItem('nome',nome.value);
    window.localStorage.setItem('senha',senha.value);
    window.localStorage.setItem('email',email.value);
    window.localStorage.setItem('data',dataNascimento.value);

    window.location.href = 'login.html'
})
