window.addEventListener('load', () => {
    const button = document.querySelector('#change *')
    const checkbox = document.querySelector('#change #checkbox')
    let darkMode = localStorage.getItem('darkMode')


const enableDarkMode = () => {
    document.body.classList.add('theme-dark')
    checkbox.checked = true
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('theme-dark')
    checkbox.checked = false
    localStorage.setItem('darkMode', null)
}

    darkMode === 'enabled' ? enableDarkMode() : disableDarkMode()


    button.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode')
        darkMode !== 'enabled' ? enableDarkMode() : disableDarkMode()
})

})