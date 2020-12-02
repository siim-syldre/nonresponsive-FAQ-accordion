const btn = document.querySelectorAll('.btn')
const answer = document.querySelectorAll('.answer')
const heading = document.querySelectorAll('h2')
const icon = document.querySelectorAll('.icon')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        answer[i].classList.toggle('p-active');
        heading[i].classList.toggle('h2-active');
        icon[i].classList.toggle('s-active')

    })
}


