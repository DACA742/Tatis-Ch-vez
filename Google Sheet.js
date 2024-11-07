const scriptURL = 'https://script.google.com/macros/s/AKfycbz5P47xcRT5noao7Byxe-a4hdctv1bPcV6qdPY7YbT2ntkmYitzEZ3plExItZG_8USpzw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})