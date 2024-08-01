const form  = document.querySelector("#form")

console.log(form)

function onSubmit(e){
    e.preventDefault()
    alert('Thank! You for your feedback 🙂')
}

form.addEventListener('submit', onSubmit)