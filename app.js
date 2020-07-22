const btn = document.querySelectorAll('.btns button');

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let color = btn.getAttribute('data-color')
        document.querySelector('body').style.backgroundColor = color
    })
})