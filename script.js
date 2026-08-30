// Mobile navigation toggle
;(function () {
  var toggle = document.querySelector('.nav-toggle')
  var nav = document.getElementById('primary-nav')
  if (!toggle || !nav) return

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open')
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  })

  // Close the menu when a link is tapped
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    }
  })

  // Reset state when resizing back to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 680) {
      nav.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    }
  })
})()

// Set current year in footers
;(function () {
  var y = document.querySelectorAll('[data-year]')
  y.forEach(function (el) {
    el.textContent = new Date().getFullYear()
  })
})()
