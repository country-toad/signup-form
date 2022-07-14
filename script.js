const pass = document.querySelector('#password')
const cpass = document.querySelector('#cpassword')

cpass.addEventListener('focusout', function() {
  if(cpass.value !== pass.value) {
    pass.classList.add('invalid');
    cpass.classList.add('invalid');
  }
  else {
    cpass.classList.remove('invalid');
    pass.classList.remove('invalid');
  }
})

pass.addEventListener('focusout', function() {
  if(cpass.value !== pass.value) {
    pass.classList.add('invalid');
    cpass.classList.add('invalid');
  }
  else {
    cpass.classList.remove('invalid');
    pass.classList.remove('invalid');
  }
})
