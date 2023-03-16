let parent = document.querySelector('#parent')

document.querySelector('#submit').addEventListener('click', () => {
    let amount = document.querySelector('input').value

    if (amount <= 0) {
        parent.innerHTML = `<h1>ange en giltig ålder</h1>`
    }
    else if (amount < 13) {
        parent.innerHTML = `<h1>Du är ett barn</h1>`
    }
    else if (amount < 20) {
        parent.innerHTML = `<h1>Du är en tonåring</h1>`
    }
    else if (amount < 65) {
        parent.innerHTML = `<h1>Du är en vuxen</h1>`
    }
    else {
        parent.innerHTML = `<h1>Du är en senior</h1>`
    }
})