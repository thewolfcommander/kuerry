const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
}

function switchTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

toggleSwitch.addEventListener('change', switchTheme, false)

function searchToggle (obj, evt) {
  const container = $(obj).closest('.search-wrapper')
  if (!container.hasClass('active')) {
    container.addClass('active')
    evt.preventDefault()
  } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active')
    // clear input
    container.find('.search-input').val('')
  }
}
