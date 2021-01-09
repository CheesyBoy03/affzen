let form = document.querySelector('.feedback')
let msg = document.querySelector('.form-text')

function message(){
    form.classList.add('hidden')
    msg.classList.remove('hidden')

    console.log(form)
    console.log(msg)
}