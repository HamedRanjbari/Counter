let $ = document
let paragraphs = $.querySelectorAll(".counter")
let number = 0

paragraphs.forEach(count => {
    let num = count.getAttribute("data-number")
    let timer = setInterval(() => {
        count.innerHTML = number
        number += 10
        if (number > num) {
            clearInterval(timer)
        }
    }, 1);
})
