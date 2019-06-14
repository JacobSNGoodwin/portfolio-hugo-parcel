const breakpoint = 767 // determine if we initially display menu

const toggle = document.querySelector('#menu-toggle')
const sidebar = document.querySelector('.sidebar')

toggle.addEventListener('click', function() {
  sidebar.classList.toggle('open')
})
